const nodemailer = require('nodemailer');

const sendEmail = async (subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    const mailOptions = {
      from: `"Badri Prasad Group" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
  } catch (err) {
    console.error('❌ Email failed:', err);
  }
};

module.exports = sendEmail;








// const nodemailer = require('nodemailer');

// const sendEmail = async (subject, htmlContent) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'badrisingh2017@gmail.com', // <--- Yahan apna Gmail dalein
//         pass: 'eluh ibmh uari jnmb'      // <--- Google se "App Password" generate karke yahan dalein
//       }
//     });

//     const mailOptions = {
//       from: '"Badri Prasad Group" <badrisingh2017@gmail.com>',
//       to: 'badri2001prasad@gmail.com', // <--- Jahan notification chahiye
//       subject: subject,
//       html: htmlContent
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("📧 Email sent successfully");
//   } catch (err) {
//     console.error("❌ Email failed:", err);
//   }
// };

// module.exports = sendEmail;