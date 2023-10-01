const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5001;
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
    // origin: 'https://amruthbuildproducts.netlify.app', // Replace with your Netlify site's URL
    origin: 'https://www.amruthbuildproducts.com',
  })
);

app.post('/contact', (req, res) => {
  const { name, email, number, message } = req.body;
  console.log(email);
  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // Use the email provided in the form
    to: process.env.ADMIN_EMAIL, // Replace with your email
    subject: 'Amruth Build Products Form Submission Mail',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Form Submission Details</h2>
          <table>
            <tr>
              <th>Name:</th>
              <td>${name}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>${email}</td>
            </tr>
            <tr>
              <th>Contact:</th>
              <td>${number}</td>
            </tr>
            <tr>
              <th>Message:</th>
              <td style="word-break: break-all;">${message}</td>
            </tr>
          </table>
        </div>
      </body>
      </html>
    `,
  };

  // const mailOptions = {
  //   from: process.env.ADMIN_EMAIL, // Use the email provided in the form
  //   to: process.env.ADMIN_EMAIL, // Replace with your email
  //   subject: 'Amruth Build Products Form Submission Mail',
  //   html: `
  //   <html>
  //   <body>
  //     <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; padding: 20px; margin: 20px;">
  //       <table style="width: 100%; border-collapse: collapse;">
  //         <tr>
  //           <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Name:</td>
  //           <td style="border: 1px solid #ccc; padding: 5px;">${name}</td>
  //         </tr>
  //         <tr>
  //           <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Email:</td>
  //           <td style="border: 1px solid #ccc; padding: 5px;">${email}</td>
  //         </tr>
  //         <tr>
  //           <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Contact:</td>
  //           <td style="border: 1px solid #ccc; padding: 5px;">${number}</td>
  //         </tr>
  //         <tr>
  //           <td style="font-weight: bold; border: 1px solid #ccc; padding: 5px;">Message:</td>
  //           <td style="border: 1px solid #ccc; padding: 5px; word-break: break-all; ">${message}</td>
  //         </tr>
  //       </table>
  //     </div>
  //   </body>
  // </html>`,
  // };

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

// const express = require('express');
// const app = express();
// const path = require('path'); // Import the path module
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const ejs = require('ejs'); // Import EJS
// const PORT = process.env.PORT || 8001;
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   secure: true,
//   auth: {
//     user: process.env.ADMIN_EMAIL,
//     pass: process.env.ADMIN_PASSWORD,
//   },
// });

// app.use(express.json());
// app.use(cors());
// app.use(
//   cors({
//     origin: 'https://amruthbuildproducts.netlify.app', // Replace with your Netlify site's URL
//   })
// );

// // Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views')); // Define the views directory

// app.post('/contact', (req, res) => {
//   const { name, email, number, message } = req.body;
//   console.log(email);

//   // Render the EJS template with the data
//   ejs.renderFile(
//     path.join(__dirname, 'views', 'emailTemplate.ejs'),
//     { name, email, number, message },
//     (err, data) => {
//       if (err) {
//         console.error('Error rendering EJS template:', err);
//         res.status(500).json({ error: 'Email template could not be rendered' });
//       } else {
//         // Send the email with the rendered HTML content
//         const mailOptions = {
//           from: process.env.ADMIN_EMAIL,
//           to: process.env.ADMIN_EMAIL,
//           subject: 'Amruth Build Products Form Submission Mail',
//           html: data,
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ error: 'Email could not be sent' });
//           } else {
//             console.log('Email sent:', info.response);
//             res.json({ message: 'Email sent successfully' });
//           }
//         });
//       }
//     }
//   );
// });

// app.get('/attributes', (req, res) => {
//   res.send(
//     `<div>
//     <h1>we use pictures from Vecteezy, Unspalsh, Pixabay, Pexeles</h1>
//     <a href='https://www.vecteezy.com/free-vector/support'>
//         Support Vectors by Vecteezy
//     </a><br><br>
//     <a href='https://unsplash.com/'>
//     unspalsh
//     </a><br><br>
//     <a href='https://pixabay.com/'>
//     pixabay
//     </a><br><br>
//     <a href='https://www.pexels.com/'>
//     pexels
//     </a>
//     </div>`
//   );
// });

// app.listen(PORT, () => {
//   console.log('Server is running on port number', PORT);
// });
