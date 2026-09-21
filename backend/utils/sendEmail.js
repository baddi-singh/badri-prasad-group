// const nodemailer = require('nodemailer');

// const sendEmail = async (subject, htmlContent) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST || 'smtp.hostinger.com',
//       port: Number(process.env.SMTP_PORT) || 465,
//       secure: String(process.env.SMTP_SECURE || 'true') === 'true',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       connectionTimeout: 30000,
//       greetingTimeout: 30000,
//       socketTimeout: 30000,
//     });

//     const mailOptions = {
//       from: `"Badri Prasad Group" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
//       subject,
//       html: htmlContent,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent successfully');
//   } catch (err) {
//     console.error('❌ Email failed:', err);
//   }
// };

// module.exports = sendEmail;


const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    family: 4, // Force IPv4 to avoid potential IPv6 issues
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD, // Ye naya App Password .env me hona chahiye
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;