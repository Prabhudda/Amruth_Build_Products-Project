const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8001;
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  secure: true,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: 'https://amruthbuildproducts.netlify.app', // Replace with your Netlify site's URL
  })
);

app.post('/contact', (req, res) => {
  const { name, email, number, message } = req.body;
  console.log(email);

  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // Use the email provided in the form
    to: process.env.ADMIN_EMAIL, // Replace with your email
    subject: 'Amruth Build Products Form Submission Mail',
    html: ` <html>
    <head>
      <style>
        /* Define inline styles here */
        .email-container {
          font-family: Arial, sans-serif;
          border: 1px solid #ccc;
          padding: 20px;
          margin: 20px;
        }
        .label {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <table>
          <tr>
            <td class="label" width="100">Name:</td>
            <td width="300">${name}</td>
          </tr>
          <tr>
            <td class="label" width="100">Email:</td>
            <td width="300">${email}</td>
          </tr>
          <tr>
            <td class="label" width="100">Contact:</td>
            <td width="300">${number}</td>
          </tr>
          <tr>
            <td class="label" width="100">Message:</td>
            <td width="300">${message}</td>
          </tr>
        </table>
      </div>
    </body>
  </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Email could not be sent' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.get('/attributes', (req, res) => {
  res.send(
    `<div>
    <h1>we use pictures from Vecteezy, Unspalsh, Pixabay, Pexeles</h1>
    <a href='https://www.vecteezy.com/free-vector/support'>
        Support Vectors by Vecteezy
    </a><br><br>
    <a href='https://unsplash.com/'>
    unspalsh
    </a><br><br>
    <a href='https://pixabay.com/'>
    pixabay
    </a><br><br>
    <a href='https://www.pexels.com/'>
    pexels
    </a>
    </div>`
  );
});

app.listen(PORT, () => {
  console.log('server is running on port number 8000');
});
