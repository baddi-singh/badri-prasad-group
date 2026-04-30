const nodemailer = require('nodemailer');

const sendEmail = async (subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'badrisingh2017@gmail.com', // <--- Yahan apna Gmail dalein
        pass: 'eluh ibmh uari jnmb'      // <--- Google se "App Password" generate karke yahan dalein
      }
    });

    const mailOptions = {
      from: '"Badri Prasad Group" <badrisingh2017@gmail.com>',
      to: 'badri2001prasad@gmail.com', // <--- Jahan notification chahiye
      subject: subject,
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully");
  } catch (err) {
    console.error("❌ Email failed:", err);
  }
};

module.exports = sendEmail;