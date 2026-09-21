// const { protect } = require('../middleware/authMiddleware');
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// // const { storage } = require('../config/cloudinary');
// const { storage } = require('../config/cloudinary'); // Naya Cloudinary Storage
// const Application = require('../models/Application');
// const { protect } = require('../middleware/authMiddleware'); // Dashboard Security ke liye

// // ==========================================
// // MULTER CONFIGURATION FOR PDF (Cloudinary)
// // ==========================================
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Sirf PDF files allowed hain!'), false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// // ==========================================
// // 1. POST ROUTE (Frontend Form Submit - Public)
// // ==========================================
// router.post('/', upload.single('resume'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ success: false, message: 'Resume upload (PDF) required or file was blocked' });
//     }

//     const { fullName, email, phone, targetCompany, role } = req.body;

//     // FIX: Ab Cloudinary direct URL deta hai (https://...), toh backslash (/) change karne ka jhanjhat khatam!
//     const cloudUrl = req.file.path; 

//     const newApplication = await Application.create({
//       fullName,
//       email,
//       phone,
//       targetCompany,
//       role,
//       resumePath: cloudUrl 
//     });

//     res.status(201).json({ success: true, data: newApplication });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ==========================================
// // 2. GET ROUTE (For Admin Dashboard - Secure)
// // ==========================================
// router.get('/', protect, async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: applications });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ==========================================
// // 3. ACTION ROUTES (TRASH, RESTORE, DELETE - Secure)
// // ==========================================
// router.patch('/:id/trash', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, { isDeleted: true });
//     res.json({ success: true, message: 'Moved to trash' });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// router.patch('/:id/restore', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, { isDeleted: false });
//     res.json({ success: true, message: 'Restored successfully' });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// router.delete('/:id', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: 'Permanently deleted' });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// module.exports = router;




//2nd active code
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { cloudinary } = require('../config/cloudinary');
// const Application = require('../models/Application');
// const { protect } = require('../middleware/authMiddleware');

// // ==========================================
// // MULTER CONFIGURATION FOR PDF
// // ==========================================
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Sirf PDF files allowed hain!'), false);
//   }
// };

// const upload = multer({
//   storage: multer.memoryStorage(),
//   fileFilter: fileFilter,
// });

// // ==========================================
// // CLOUDINARY PDF UPLOAD HELPER
// // ==========================================
// const uploadToCloudinary = (file) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: 'badri_group_resumes',
//         resource_type: 'raw',
//         public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, '')}`,
//       },
//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       }
//     );

//     stream.end(file.buffer);
//   });
// };

// // ==========================================
// // 1. POST ROUTE
// // Frontend Form Submit - Public
// // ==========================================
// router.post('/', upload.single('resume'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: 'Resume upload (PDF) required or file was blocked',
//       });
//     }

//     const { fullName, email, phone, targetCompany, role } = req.body;

//     // Upload PDF to Cloudinary
//     const cloudinaryResult = await uploadToCloudinary(req.file);

//     const newApplication = await Application.create({
//       fullName,
//       email,
//       phone,
//       targetCompany,
//       role,
//       resumePath: cloudinaryResult.secure_url,
//     });

//     res.status(201).json({
//       success: true,
//       data: newApplication,
//     });
//   } catch (error) {
//     console.error('Career application error:', error);

//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// // ==========================================
// // 2. GET ROUTE
// // For Admin Dashboard - Secure
// // ==========================================
// router.get('/', protect, async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       data: applications,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// // ==========================================
// // 3. ACTION ROUTES
// // TRASH, RESTORE, DELETE - Secure
// // ==========================================

// router.patch('/:id/trash', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, {
//       isDeleted: true,
//     });

//     res.json({
//       success: true,
//       message: 'Moved to trash',
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// router.patch('/:id/restore', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, {
//       isDeleted: false,
//     });

//     res.json({
//       success: true,
//       message: 'Restored successfully',
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// router.delete('/:id', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);

//     res.json({
//       success: true,
//       message: 'Permanently deleted',
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// module.exports = router;









// working code
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const { cloudinary } = require('../config/cloudinary');
// const Application = require('../models/Application');
// const { protect } = require('../middleware/authMiddleware');

// // ==========================================
// // NODEMAILER TRANSPORTER SETUP
// // ==========================================
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST || 'smtp.hostinger.com',
//   port: Number(process.env.SMTP_PORT) || 465,
//   secure: process.env.SMTP_SECURE === 'false' ? false : true,
//   auth: {
//     user: process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com',
//     pass: process.env.SMTP_PASSWORD
//   }
// });

// // ==========================================
// // MULTER CONFIGURATION FOR PDF
// // ==========================================
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Sirf PDF files allowed hain!'), false);
//   }
// };

// const upload = multer({
//   storage: multer.memoryStorage(),
//   fileFilter: fileFilter,
// });

// // ==========================================
// // CLOUDINARY PDF UPLOAD HELPER
// // ==========================================
// const uploadToCloudinary = (file) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: 'badri_group_resumes',
//         resource_type: 'raw',
//         public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, '')}`,
//       },
//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//     stream.end(file.buffer);
//   });
// };

// // ==========================================
// // 1. POST ROUTE: Form Submit + Send Emails
// // ==========================================
// router.post('/', upload.single('resume'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ success: false, message: 'Resume upload (PDF) required or file was blocked' });
//     }

//     const { fullName, email, phone, targetCompany, role } = req.body;
    
//     // 1. Upload PDF to Cloudinary
//     const cloudinaryResult = await uploadToCloudinary(req.file);

//     // 2. Save to Database
//     const newApplication = await Application.create({
//       fullName,
//       email,
//       phone,
//       targetCompany,
//       role,
//       resumePath: cloudinaryResult.secure_url,
//     });

//     // 3. Email Dispatch Logic
//     const adminRecipient = process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com';

//     // A. Admin Notification (Tujhe aayegi)
//     const adminMailOptions = {
//       from: `"Badri Prasad Group HR" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
//       to: adminRecipient,
//       subject: `📄 New Application: ${role} at ${targetCompany} - ${fullName}`,
//       html: `
//         <div style="background-color: #050505; color: #ffffff; padding: 30px; font-family: Arial, sans-serif; border-radius: 8px; border: 1px solid #222;">
//           <h2 style="color: #00e5ff; margin-top: 0; letter-spacing: 1px;">NEW CAREER APPLICATION</h2>
//           <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
//           <p><strong style="color: #aaa;">Applicant Name:</strong> ${fullName}</p>
//           <p><strong style="color: #aaa;">Email Address:</strong> <a href="mailto:${email}" style="color: #00e5ff;">${email}</a></p>
//           <p><strong style="color: #aaa;">Phone:</strong> ${phone}</p>
//           <p><strong style="color: #aaa;">Target Subsidiary:</strong> <span style="color: #D4AF37; font-weight: bold;">${targetCompany}</span></p>
//           <p><strong style="color: #aaa;">Applied Role:</strong> ${role}</p>
//           <div style="margin-top: 30px;">
//             <a href="${cloudinaryResult.secure_url}" target="_blank" style="background: #00e5ff; color: #000; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">📄 VIEW ATTACHED RESUME</a>
//           </div>
//           <p style="font-size: 11px; color: #666; margin-top: 30px;">Automated alert from Badri Prasad Group Careers Portal.</p>
//         </div>
//       `
//     };

//     // B. Applicant Auto-Responder (Candidate ko aayegi)
//     const clientMailOptions = email ? {
//       from: `"Badri Prasad Group Careers" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
//       to: email,
//       subject: `Application Received: ${role} | Badri Prasad Group`,
//       html: `
//         <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #222; border-radius: 8px;">
//           <div style="text-align: center; margin-bottom: 30px;">
//             <h1 style="color: #ffffff; letter-spacing: 3px; margin: 0; font-size: 24px;">BADRI<span style="color: #D4AF37;">PRASAD</span></h1>
//             <p style="color: #888; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-top: 5px;">Talent Acquisition</p>
//           </div>
//           <div style="border-top: 1px solid #222; border-bottom: 1px solid #222; padding: 25px 0;">
//             <p style="color: #fff; font-size: 15px; margin-top: 0;">Dear ${fullName},</p>
//             <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
//               Thank you for expressing interest in joining our ecosystem. We have successfully received your application and resume for the <strong>${role}</strong> position at <strong>${targetCompany}</strong>.
//             </p>
//             <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
//               Our Talent Acquisition team will review your profile. If your qualifications align with our current strategic requirements, we will contact you for the next steps.
//             </p>
//           </div>
//           <div style="margin-top: 30px; text-align: center;">
//             <p style="color: #D4AF37; font-size: 12px; font-weight: bold; margin: 0;">HUMAN CAPITAL DIVISION</p>
//             <p style="color: #555; font-size: 11px; margin-top: 5px;">Badri Prasad Group Holdings • All Rights Reserved</p>
//           </div>
//         </div>
//       `
//     } : null;

//     // Send emails without blocking the response
//     try {
//       await transporter.sendMail(adminMailOptions);
//       if (clientMailOptions) await transporter.sendMail(clientMailOptions);
//     } catch (mailError) {
//       console.error('Mail dispatch notice:', mailError.message);
//     }

//     res.status(201).json({ success: true, data: newApplication });

//   } catch (error) {
//     console.error('Career application error:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ==========================================
// // 2. GET ROUTE (For Admin Dashboard)
// // ==========================================
// router.get('/', protect, async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: applications });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ==========================================
// // 3. ACTION ROUTES (TRASH, RESTORE, DELETE)
// // ==========================================
// router.patch('/:id/trash', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, { isDeleted: true });
//     res.json({ success: true, message: 'Moved to trash' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// router.patch('/:id/restore', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndUpdate(req.params.id, { isDeleted: false });
//     res.json({ success: true, message: 'Restored successfully' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// router.delete('/:id', protect, async (req, res) => {
//   try {
//     await Application.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: 'Permanently deleted' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// module.exports = router;












// 3rd: (Isme Cloudinary upload, Database save, aur Nodemailer dono templates ke sath hain)

const express = require('express');
const router = express.Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const { cloudinary } = require('../config/cloudinary');
const Application = require('../models/Application');
const { protect } = require('../middleware/authMiddleware');

// ==========================================
// NODEMAILER TRANSPORTER SETUP
// ==========================================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'false' ? false : true,
  family: 4, // Force IPv4 to avoid potential IPv6 issues
  auth: {
    user: process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com',
    pass: process.env.SMTP_PASSWORD
  }
});

// ==========================================
// MULTER CONFIGURATION FOR PDF
// ==========================================
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Sirf PDF files allowed hain!'), false);
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: fileFilter,
});

// ==========================================
// CLOUDINARY PDF UPLOAD HELPER
// ==========================================
const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'badri_group_resumes',
        resource_type: 'raw',
        public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, '')}`,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    stream.end(file.buffer);
  });
};

// ==========================================
// 1. POST ROUTE: Form Submit + Send Emails
// ==========================================
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Resume upload (PDF) required or file was blocked' });
    }

    const { fullName, email, phone, targetCompany, role } = req.body;
    
    // 1. Upload PDF to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(req.file);

    // 2. Save to Database
    const newApplication = await Application.create({
      fullName,
      email,
      phone,
      targetCompany,
      role,
      resumePath: cloudinaryResult.secure_url,
    });

    // 3. Email Dispatch Logic
    const adminRecipient = process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com';

    // A. Admin Notification (Tujhe aayegi)
    const adminMailOptions = {
      from: `"Badri Prasad Group HR" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
      to: adminRecipient,
      subject: `📄 New Application: ${role} at ${targetCompany} - ${fullName}`,
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 30px; font-family: Arial, sans-serif; border-radius: 8px; border: 1px solid #222;">
          <h2 style="color: #00e5ff; margin-top: 0; letter-spacing: 1px;">NEW CAREER APPLICATION</h2>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p><strong style="color: #aaa;">Applicant Name:</strong> ${fullName}</p>
          <p><strong style="color: #aaa;">Email Address:</strong> <a href="mailto:${email}" style="color: #00e5ff;">${email}</a></p>
          <p><strong style="color: #aaa;">Phone:</strong> ${phone}</p>
          <p><strong style="color: #aaa;">Target Subsidiary:</strong> <span style="color: #D4AF37; font-weight: bold;">${targetCompany}</span></p>
          <p><strong style="color: #aaa;">Applied Role:</strong> ${role}</p>
          <div style="margin-top: 30px;">
            <a href="${cloudinaryResult.secure_url}" target="_blank" style="background: #00e5ff; color: #000; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">📄 VIEW ATTACHED RESUME (PDF)</a>
          </div>
          <p style="font-size: 11px; color: #666; margin-top: 30px;">Automated alert from Badri Prasad Group Careers Portal.</p>
        </div>
      `
    };

    // B. Applicant Auto-Responder (Candidate ko aayegi)
    const clientMailOptions = email ? {
      from: `"Badri Prasad Group Careers" <${process.env.SMTP_EMAIL || 'contact@badriprasadgroup.com'}>`,
      to: email,
      subject: `Application Received: ${role} | Badri Prasad Group`,
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #222; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #ffffff; letter-spacing: 3px; margin: 0; font-size: 24px;">BADRI<span style="color: #D4AF37;">PRASAD</span></h1>
            <p style="color: #888; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-top: 5px;">Talent Acquisition Team</p>
          </div>
          <div style="border-top: 1px solid #222; border-bottom: 1px solid #222; padding: 25px 0;">
            <p style="color: #fff; font-size: 15px; margin-top: 0;">Dear ${fullName},</p>
            <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
              Thank you for expressing interest in joining our ecosystem. We have successfully received your application and resume for the <strong>${role}</strong> position at <strong>${targetCompany}</strong>.
            </p>
            <p style="color: #ccc; line-height: 1.7; font-size: 13px;">
              Our Talent Acquisition team will carefully review your profile. If your qualifications and experience align with our current strategic requirements, we will contact you to discuss the next steps.
            </p>
          </div>
          <div style="margin-top: 30px; text-align: center;">
            <p style="color: #D4AF37; font-size: 12px; font-weight: bold; margin: 0;">HUMAN CAPITAL DIVISION</p>
            <p style="color: #555; font-size: 11px; margin-top: 5px;">Badri Prasad Group Holdings • All Rights Reserved</p>
          </div>
        </div>
      `
    } : null;

    // Asynchronous non-blocking email delivery (agar email fail ho, toh bhi DB mein save hoga)
    try {
      await transporter.sendMail(adminMailOptions);
      if (clientMailOptions) await transporter.sendMail(clientMailOptions);
    } catch (mailError) {
      console.error('Mail dispatch notice:', mailError.message);
    }

    res.status(201).json({ success: true, data: newApplication });

  } catch (error) {
    console.error('Career application error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// 2. GET ROUTE (For Admin Dashboard)
// ==========================================
router.get('/', protect, async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// 3. ACTION ROUTES (TRASH, RESTORE, DELETE)
// ==========================================
router.patch('/:id/trash', protect, async (req, res) => {
  try {
    await Application.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'Moved to trash' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch('/:id/restore', protect, async (req, res) => {
  try {
    await Application.findByIdAndUpdate(req.params.id, { isDeleted: false });
    res.json({ success: true, message: 'Restored successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Permanently deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;