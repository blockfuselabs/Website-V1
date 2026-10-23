/** Reminders cover the first payment, before any transfer has been verified. */
const paymentReminderEligibility = ({ applicant, payments = [], track }) => {
  if (applicant.status === 'rejected') {
    return { eligible: false, reason: 'This application was rejected.' };
  }
  if (
    applicant.payment_status === 'paid' ||
    ['enrolled', 'awaiting-next-installment'].includes(applicant.status) ||
    payments.some((payment) => payment.status === 'verified')
  ) {
    return { eligible: false, reason: 'This applicant has already made a verified payment.' };
  }
  if (payments.some((payment) => payment.status === 'pending_review')) {
    return { eligible: false, reason: 'Payment proof is awaiting review.' };
  }
  if (!applicant.status_token) {
    return { eligible: false, reason: 'This application has no payment link.' };
  }
  if (!track || !Number.isFinite(Number(track.price)) || Number(track.price) <= 0) {
    return { eligible: false, reason: 'This application has no current payment track.' };
  }
  return { eligible: true, reason: null };
};

module.exports = { paymentReminderEligibility };
