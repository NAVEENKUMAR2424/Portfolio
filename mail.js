const nodemailer = require('nodemailer');

// Set up your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your-email-password'
  }
});

// Email content
const mailOptions = {
  from: 'your.email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
