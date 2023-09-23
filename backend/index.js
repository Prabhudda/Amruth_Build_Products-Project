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

app.post('contact', (req, res) => {
  const { name, email, number, message } = req.body;
  console.log(email);

  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // Use the email provided in the form
    to: process.env.ADMIN_EMAIL, // Replace with your email
    subject: 'Amruth Build Products Form Submission Mail',
    html: `<span>
    <span><b>Name: </b></span> ${name}<br><span><b>Email: </b></span> ${email}<br><span><b>Contact: </b></span> ${number}<br><span><b>Message: </b></span> ${message}
</span>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Email could not be sent' });
    } else {
      // console.log('Email sent:', info.response);
      // res.json({ message: 'Email sent successfully' });
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
