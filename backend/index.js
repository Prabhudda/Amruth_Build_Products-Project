const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5001;
const fs = require('fs');
require('dotenv').config();

const formSubmission = fs.readFileSync('mailFile.html', 'utf-8');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  secure: true,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

app.use(express.json());

app.use(
  cors({
    origin: 'https://www.amruthbuildproducts.com',
  })
);

app.post('/contact', (req, res) => {
  const { name, email, number, message } = req.body;
  console.log(email);
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: 'Amruth Build Products Form Submission Mail',
    html: `
    <html>
    <body>
      <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; padding: 10px; margin: 10px;">
      ${formSubmission}
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Name:</td>
            <td style="border: 1px solid #ccc; padding: 5px;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Email:</td>
            <td style="border: 1px solid #ccc; padding: 5px;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Contact:</td>
            <td style="border: 1px solid #ccc; padding: 5px;">${number}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Message:</td>
            <td style="border: 1px solid #ccc; padding: 5px; word-break: break-all; ">${message}</td>
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
    <div>
    <h1>Image by 
    <a href="https://www.freepik.com/free-vector/flat-engineering-construction-illustrated_13107137.htm#query=construction&position=1&from_view=keyword&track=sph">Freepik</a></h1>
    
    </div>
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
  console.log(`server is running on port number ${PORT}`);
});
