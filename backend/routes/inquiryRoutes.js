const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Inquiry = require('../models/Inquiry');
const { protect } = require('../middleware/authMiddleware');

// 1. Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'false' ? false : true,
  auth: {
    user: process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com',
    pass: process.env.SMTP_PASSWORD
  }
});

// 2. GET: Admin Dashboard ke liye saari inquiries laana
router.get('/', protect, async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 3. POST: Public Form Submission (Database Save + Dual Email Dispatch)
router.post('/', async (req, res) => {
  try {
    const { name, fullName, email, phone, company, targetCompany, vertical, message } = req.body;

    const senderName = name || fullName || 'Valued Partner';
    const senderEmail = (email || '').trim();
    // 🔥 DEVIL FIX: Database requires "vertical", mapping it perfectly here
    const entityName = vertical || targetCompany || company || 'Badri Prasad Group';
    const clientPhone = phone || 'Not Provided';
    const clientMessage = message || 'No specific inquiry text provided.';

    // Pehle Database mein save karo - Mongoose schema requires 'vertical'
    const newInquiry = await Inquiry.create({
      name: senderName,
      email: senderEmail,
      phone: clientPhone,
      vertical: entityName, 
      message: clientMessage
    });

    const adminRecipient = process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com';

    // A. Admin Notification Email Options
    const adminMailOptions = {
      from: `"Badri Prasad Group Portal" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
      to: adminRecipient,
      subject: `⚡ New Executive Inquiry: ${entityName} - ${senderName}`,
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 30px; font-family: Arial, sans-serif; border-radius: 8px; border: 1px solid #222;">
          <h2 style="color: #D4AF37; margin-top: 0; letter-spacing: 1px;">NEW STRATEGIC INQUIRY</h2>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p><strong style="color: #aaa;">Target Entity (Vertical):</strong> <span style="color: #00e5ff; font-weight: bold;">${entityName}</span></p>
          <p><strong style="color: #aaa;">Sender Name:</strong> ${senderName}</p>
          <p><strong style="color: #aaa;">Email Address:</strong> <a href="mailto:${senderEmail}" style="color: #D4AF37;">${senderEmail}</a></p>
          <p><strong style="color: #aaa;">Phone:</strong> ${clientPhone}</p>
          <div style="margin-top: 20px; padding: 15px; background: #111; border-left: 3px solid #D4AF37; border-radius: 4px;">
            <p style="margin: 0; color: #ddd; line-height: 1.6;">${clientMessage}</p>
          </div>
          <p style="font-size: 11px; color: #666; margin-top: 30px;">Received via Badri Prasad Group Corporate Infrastructure.</p>
        </div>
      `
    };

    // B. Client Confirmation Auto-Reply Template
    const clientMailOptions = senderEmail ? {
      from: `"Badri Prasad Group" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
      to: senderEmail,
      subject: `Inquiry Received | Badri Prasad Group`,
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #222; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ffffff; letter-spacing: 3px; margin: 0; font-size: 24px;">BADRI<span style="color: #D4AF37;">PRASAD</span></h1>
            <p style="color: #888; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-top: 5px;">Enterprise Ecosystem</p>
          </div>
          <div style="border-top: 1px solid #222; border-bottom: 1px solid #222; padding: 25px 0;">
            <p style="color: #fff; font-size: 15px; margin-top: 0;">Dear ${senderName},</p>
            <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
              Thank you for initiating contact with <strong>Badri Prasad Group</strong> regarding <strong>${entityName}</strong>.
            </p>
            <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
              Your submission has been securely routed to the corresponding corporate desk. Our executive team will review your inquiry and follow up promptly.
            </p>
          </div>
          <div style="margin-top: 30px; text-align: center;">
            <p style="color: #D4AF37; font-size: 12px; font-weight: bold; margin: 0;">CORPORATE GOVERNANCE & RELATIONS</p>
            <p style="color: #555; font-size: 11px; margin-top: 5px;">Badri Prasad Group Holdings • All Rights Reserved</p>
          </div>
        </div>
      `
    } : null;

    // Asynchronous non-blocking email delivery
    try {
      await transporter.sendMail(adminMailOptions);
      if (clientMailOptions) {
        await transporter.sendMail(clientMailOptions);
      }
    } catch (mailError) {
      console.error('Mail dispatch notice:', mailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully.',
      data: newInquiry
    });

  } catch (err) {
    console.error('Inquiry Validation/Submission Error:', err.message);
    res.status(500).json({ success: false, message: 'Server error processing inquiry', error: err.message });
  }
});

// 4. Trash & Restore Routes
router.patch('/:id/trash', protect, async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'Inquiry moved to trash' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch('/:id/restore', protect, async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: false });
    res.json({ success: true, message: 'Inquiry restored' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Inquiry permanently deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;








// const express = require('express');
// const router = express.Router();
// const Inquiry = require('../models/Inquiry');
// const sendEmail = require('../utils/sendEmail');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/', async (req, res) => {
//   try {
//     const newInquiry = await Inquiry.create(req.body);
    
//     // Send Email Notification
//     await sendEmail(
//       `New Contact Inquiry: ${req.body.name}`,
//       `<h3>New Inquiry Received</h3>
//        <p><b>Name:</b> ${req.body.name}</p>
//        <p><b>Email:</b> ${req.body.email}</p>
//        <p><b>Vertical:</b> ${req.body.vertical}</p>
//        <p><b>Message:</b> ${req.body.message}</p>`
//     );

//     res.status(201).json({ success: true, data: newInquiry });
//   } catch (error) { res.status(500).json({ success: false, error: error.message }); }
// });

// router.get('/', protect, async (req, res) => {
//   const data = await Inquiry.find().sort({ createdAt: -1 });
//   res.json({ success: true, data });
// });

// router.patch('/:id/trash', protect, async (req, res) => {
//   await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
//   res.json({ success: true });
// });

// router.delete('/:id', protect, async (req, res) => {
//   await Inquiry.findByIdAndDelete(req.params.id);
//   res.json({ success: true });
// });

// module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const Inquiry = require('../models/Inquiry'); 

// // // 1. POST ROUTE: Form Submit
// // router.post('/', async (req, res) => {
// //   try {
// //     const { name, email, vertical, message } = req.body;
// //     const newInquiry = await Inquiry.create({ name, email, vertical, message });
// //     res.status(201).json({ success: true, data: newInquiry });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // 2. GET ROUTE: Dashboard
// // router.get('/', async (req, res) => {
// //   try {
// //     const inquiries = await Inquiry.find().sort({ createdAt: -1 });
// //     res.status(200).json({ success: true, data: inquiries });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // ==========================================
// // // 3. ACTION ROUTES (TRASH, RESTORE, DELETE)
// // // ==========================================
// // router.patch('/:id/trash', async (req, res) => {
// //   try {
// //     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
// //     res.json({ success: true, message: 'Moved to trash' });
// //   } catch (err) { 
// //     res.status(500).json({ success: false, message: err.message }); 
// //   }
// // });

// // router.patch('/:id/restore', async (req, res) => {
// //   try {
// //     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: false });
// //     res.json({ success: true, message: 'Restored successfully' });
// //   } catch (err) { 
// //     res.status(500).json({ success: false, message: err.message }); 
// //   }
// // });

// // router.delete('/:id', async (req, res) => {
// //   try {
// //     await Inquiry.findByIdAndDelete(req.params.id);
// //     res.json({ success: true, message: 'Permanently deleted' });
// //   } catch (err) { 
// //     res.status(500).json({ success: false, message: err.message }); 
// //   }
// // });

// // module.exports = router;







// // const express = require('express');
// // const router = express.Router();
// // const Inquiry = require('../models/Inquiry'); // Schema import

// // router.post('/', async (req, res) => {
// //   try {
// //     console.log("---- ASLI ROUTE HIT HUA ----");
// //     console.log("Data to save:", req.body);

// //     // Ye line DB mein save karegi
// //     const newInquiry = await Inquiry.create(req.body);
    
// //     console.log("✅ DATA SAVED SUCCESS IN COMPASS:", newInquiry._id);

// //     res.status(201).json({ success: true, data: newInquiry });
// //   } catch (error) {
// //     console.log("❌ Error:", error.message);
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // });


// // GET Route - Admin Dashboard ke liye saari inquiries lana
// router.get('/', async (req, res) => {
//   try {
//     // .sort({ createdAt: -1 }) se sabse naya message sabse upar aayega
//     const inquiries = await Inquiry.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: inquiries });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });


// module.exports = router;
