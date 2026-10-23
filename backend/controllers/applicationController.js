const crypto = require('crypto');
const { ProgramApplication, Payment, Track } = require('../models');
const { Op } = require('sequelize');
const { uploadToCloudinary } = require('../utils/cloudinary');
const { sendStatusLinkEmail, sendPaymentReminderEmail } = require('../utils/paymentEmails');
const { FRONTEND_ORIGIN } = require('../config/payments');
const { paymentReminderEligibility } = require('../utils/paymentReminder');
const { dueAmountFor } = require('../utils/paymentRules');

/** Opaque, unguessable lookup token for the applicant's payment/status page. */
const generateStatusToken = () => crypto.randomBytes(24).toString('hex');

exports.submit = async (req, res) => {
  try {
    const data = req.body;

    // One application per email. Block before any side effect so a duplicate
    // never hits Cloudinary or creates a second record.
    const alreadyApplied = await ProgramApplication.findOne({
      where: {
        email: { [Op.iLike]: data.email },
        status: { [Op.not]: 'rejected' },
      },
    });
    if (alreadyApplied) {
      return res.status(409).json({
        success: false,
        error: 'You have already submitted an application for this email. Check your inbox or your status page for the next steps.',
      });
    }

    if (req.file) {
      // Resumes are PDFs/DOCX — upload as raw documents, not images.
      const result = await uploadToCloudinary(req.file.buffer, 'blockfuse/resumes', 'raw');
      data.resume_url = result.secure_url;
    }

    const statusToken = generateStatusToken();
    data.status_token = statusToken;

    const application = await ProgramApplication.create(data);

    // Give the applicant a secure link to their payment instructions and
    // live status page.
    sendStatusLinkEmail({
      name: data.name,
      email: data.email,
      track: data.track,
      statusUrl: `${FRONTEND_ORIGIN}/apply/${statusToken}`,
    }).catch((err) => console.error('Status-link email error:', err.message));

    return res.status(201).json({
      success: true,
      data: { id: application.id, statusToken },
    });
  } catch (err) {
    console.error('Application error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const [applications, tracks] = await Promise.all([
      ProgramApplication.findAll({
        include: [{ model: Payment, as: 'payments', attributes: ['status'], separate: true }],
        order: [['createdAt', 'DESC']],
      }),
      Track.findAll({ attributes: ['name', 'price'] }),
    ]);
    const tracksByName = new Map(tracks.map((track) => [track.name, track]));
    const data = applications.map((application) => {
      const { payments, ...applicant } = application.toJSON();
      const reminder = paymentReminderEligibility({
        applicant,
        payments,
        track: tracksByName.get(applicant.track),
      });
      return {
        ...applicant,
        can_send_payment_reminder: reminder.eligible,
        payment_reminder_reason: reminder.reason,
      };
    });
    return res.json({ success: true, data });
  } catch (err) {
    console.error('Get applications error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.sendPaymentReminder = async (req, res) => {
  try {
    const applicant = await ProgramApplication.findByPk(req.params.id, {
      include: [{ model: Payment, as: 'payments', attributes: ['status'], separate: true }],
    });
    if (!applicant) {
      return res.status(404).json({ success: false, error: 'Application not found.' });
    }
    const track = await Track.findOne({ where: { name: applicant.track } });
    // Recheck on every click: the dashboard may have loaded before payment.
    const reminder = paymentReminderEligibility({ applicant, payments: applicant.payments, track });
    if (!reminder.eligible) {
      return res.status(409).json({ success: false, error: reminder.reason });
    }

    const sent = await sendPaymentReminderEmail({
      name: applicant.name,
      email: applicant.email,
      track: track.name,
      amount: dueAmountFor(track, 1),
      installment: track.total_installments > 1,
      statusUrl: `${FRONTEND_ORIGIN}/apply/${encodeURIComponent(applicant.status_token)}`,
    });
    if (!sent) {
      return res.status(502).json({ success: false, error: 'The email service could not send the reminder. Please try again.' });
    }
    return res.json({ success: true, message: 'Payment reminder sent.' });
  } catch (err) {
    console.error('Payment reminder error:', err);
    return res.status(500).json({ success: false, error: 'Unable to send payment reminder. Please try again.' });
  }
};


exports.remove = async (req, res) => {
  try {
    const item = await ProgramApplication.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, error: 'Not found' });
    await item.destroy();
    return res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};
