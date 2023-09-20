// Server-side code (Node.js with Express)
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors")

const app = express();
const port = 4200;

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
  }))

// Configure nodemailer to send emails
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'SMTP', etc.
  auth: {
    user: 'nursentombi0@gmail.com', // your email address
    pass: 'your-email-password', // your email password or app-specific password
  },
});

// Define an API endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create email content
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient-email@example.com', // recipient's email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
