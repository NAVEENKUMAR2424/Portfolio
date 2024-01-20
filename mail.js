const nodemailer = require('nodemailer');

// Set up your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naveenkumarport@gmail.com',
    pass: 'NAVEENKUMARPORTFOLIO'
  }
});

// Email content
const mailOptions = {
  from: 'naveenkumarport@gmail.com',
  to: 'naveenkumar978636@gmail.com',
  subject: 'Hello from Node.js',
  text: document.getElementById("message").value,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
