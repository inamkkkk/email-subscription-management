const Subscriber = require('../models/Subscriber');
const nodemailer = require('nodemailer');

exports.sendMassEmail = async (req, res) => {
  try {
    const { subject, body } = req.body;
    const subscribers = await Subscriber.find();

    if (!subscribers || subscribers.length === 0) {
      return res.status(404).json({ message: 'No subscribers found' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      bcc: subscribers.map(subscriber => subscriber.email),
      subject: subject,
      html: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending emails', error: error.message });
      } else {
        console.log('Email sent: ' + info.response);
        return res.json({ message: 'Emails sent successfully', response: info.response });
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};