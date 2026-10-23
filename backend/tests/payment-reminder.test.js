const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { mock } = require('node:test');

// Use fake configuration and intercept the email helper; no real email or DB calls.
Object.assign(process.env, {
  NODE_ENV: 'development',
  RESEND_API_KEY: 're_test_payment_reminder',
  ADMIN_EMAIL: 'admin@example.test',
  BANK_NAME: 'Test Bank',
  BANK_ACCOUNT_NAME: 'Test Account',
  BANK_ACCOUNT_NUMBER: '0000000000',
  PAYMENT_CALLBACK_ORIGIN: 'https://example.test',
  JWT_SECRET: 'payment-reminder-test-secret',
});

const emailHelper = require('../utils/resend');
const sendEmail = mock.method(emailHelper, 'sendConfirmationEmail', async () => true);
const { ProgramApplication, Track } = require('../models');
const jwt = require('jsonwebtoken');
const router = require('../routes/applications');
const controller = require('../controllers/applicationController');
const { paymentReminderEligibility } = require('../utils/paymentReminder');

const applicant = {
  id: 7,
  name: 'Ada <Example>',
  email: 'ada@example.test',
  track: 'Basic Track',
  status: 'pending',
  payment_status: 'none',
  status_token: 'test-status-token',
  payments: [],
};
const track = { name: 'Basic Track', price: 100000, total_installments: 1 };
const findApplicant = mock.method(ProgramApplication, 'findByPk', async () => ({ ...applicant }));
const findTrack = mock.method(Track, 'findOne', async () => ({ ...track }));
const findApplications = mock.method(ProgramApplication, 'findAll', async () => []);
const findTracks = mock.method(Track, 'findAll', async () => [track]);

beforeEach(() => {
  sendEmail.mock.resetCalls();
  sendEmail.mock.mockImplementation(async () => true);
  findApplicant.mock.resetCalls();
  findApplicant.mock.mockImplementation(async () => ({ ...applicant }));
  findTrack.mock.mockImplementation(async () => ({ ...track }));
  findApplications.mock.mockImplementation(async () => []);
  findTracks.mock.mockImplementation(async () => [track]);
});

const responseFor = (resolve) => ({
  statusCode: 200,
  status(code) { this.statusCode = code; return this; },
  json(body) { resolve({ status: this.statusCode, body }); return this; },
});

const requestReminder = (authenticated = true) => new Promise((resolve, reject) => {
  const cookies = authenticated
    ? { bf_admin_token: jwt.sign({ id: 1, email: 'admin@example.test' }, process.env.JWT_SECRET) }
    : {};
  router.handle({
    method: 'POST',
    url: '/7/payment-reminder',
    cookies,
    // The registered address must always win over anything supplied by a client.
    body: { email: 'different@example.test' },
  }, responseFor(resolve), (err) => reject(err || new Error('Reminder route was not matched')));
});

test('unpaid applicants and rejected payment proofs are eligible', () => {
  for (const payments of [[], [{ status: 'rejected' }]]) {
    assert.equal(paymentReminderEligibility({ applicant, track, payments }).eligible, true);
  }
});

test('paid, pending-review, rejected, and unsupported applications are ineligible', () => {
  const cases = [
    { payments: [{ status: 'verified' }] },
    { payments: [{ status: 'pending_review' }] },
    { applicant: { ...applicant, payment_status: 'paid' } },
    { applicant: { ...applicant, status: 'enrolled' } },
    { applicant: { ...applicant, status: 'awaiting-next-installment' } },
    { applicant: { ...applicant, status: 'rejected' } },
    { applicant: { ...applicant, status_token: null } },
    { track: null },
    { track: { ...track, price: 0 } },
  ];
  for (const overrides of cases) {
    const result = paymentReminderEligibility({ applicant, track, ...overrides });
    assert.equal(result.eligible, false);
    assert.ok(result.reason);
  }
});

test('reminder endpoint requires an admin session', async () => {
  const result = await requestReminder(false);
  assert.equal(result.status, 401);
  assert.equal(findApplicant.mock.callCount(), 0);
  assert.equal(sendEmail.mock.callCount(), 0);
});

test('admin sends branded email to the registered address with a personal payment link', async () => {
  const result = await requestReminder();
  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(sendEmail.mock.callCount(), 1);
  const payload = sendEmail.mock.calls[0].arguments[0];
  assert.equal(payload.to, applicant.email);
  assert.match(payload.subject, /Reminder/);
  assert.match(payload.html, /Ada &lt;Example&gt;/);
  assert.match(payload.html, /₦100,000/);
  assert.match(payload.html, /https:\/\/example\.test\/apply\/test-status-token/);
  assert.match(payload.html, /Continue your payment here:/);
  assert.match(payload.html, /href="https:\/\/example\.test\/apply\/test-status-token"[^>]*>https:\/\/example\.test\/apply\/test-status-token<\/a>/);
  assert.match(payload.html, />Continue payment<\/a>/);
  assert.match(payload.html, /You do not need to pay again/);
});

test('blockchain reminder asks for the first 50% installment', async () => {
  findTrack.mock.mockImplementation(async () => ({ ...track, price: 250000, total_installments: 2 }));
  const result = await requestReminder();
  assert.equal(result.status, 200);
  const payload = sendEmail.mock.calls[0].arguments[0];
  assert.match(payload.html, /first installment/);
  assert.match(payload.html, /₦125,000/);
});

test('endpoint rechecks payment state and skips payments awaiting review or already verified', async () => {
  for (const status of ['pending_review', 'verified']) {
    findApplicant.mock.mockImplementation(async () => ({ ...applicant, payments: [{ status }] }));
    const result = await requestReminder();
    assert.equal(result.status, 409);
    assert.equal(sendEmail.mock.callCount(), 0);
  }
});

test('missing application returns 404 without sending', async () => {
  findApplicant.mock.mockImplementation(async () => null);
  assert.equal((await requestReminder()).status, 404);
  assert.equal(sendEmail.mock.callCount(), 0);
});

test('email provider failure returns an error instead of reporting success', async () => {
  sendEmail.mock.mockImplementation(async () => false);
  const result = await requestReminder();
  assert.equal(result.status, 502);
  assert.equal(result.body.success, false);
});

test('applications inbox receives eligibility based on actual payments', async () => {
  const unpaid = { ...applicant };
  const paid = { ...applicant, id: 8, payments: [{ status: 'verified' }] };
  findApplications.mock.mockImplementation(async () => [unpaid, paid].map((data) => ({ toJSON: () => data })));
  const result = await new Promise((resolve) => controller.getAll({}, responseFor(resolve)));
  assert.equal(result.status, 200);
  assert.equal(result.body.data[0].can_send_payment_reminder, true);
  assert.equal(result.body.data[1].can_send_payment_reminder, false);
  assert.match(result.body.data[1].payment_reminder_reason, /verified payment/);
  assert.equal('payments' in result.body.data[0], false);
});
