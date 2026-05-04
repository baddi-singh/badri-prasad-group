const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const InvestorData = require('../models/InvestorData');

// 1. Cloudinary Config (Backend ki .env se variables lega)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. SMART STORAGE LOGIC
let storage;

// Agar Render/Live pe hai, toh Cloudinary use karega
if (process.env.NODE_ENV === 'production') {
  storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'badri_group_reports',
      resource_type: 'auto' 
    },
  });
} 
// Agar tumhare Laptop pe hai, toh local uploads folder use karega
else {
  storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads/'); },
    filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
  });
}

// 10MB Limit
const upload = multer({ 
  storage: storage, 
  limits: { fileSize: 10 * 1024 * 1024 } 
});

// API ROUTES
router.get('/', async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    if (!data) data = await InvestorData.create({}); 
    res.json({ success: true, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/metrics', async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    data.metrics = req.body;
    await data.save();
    res.json({ success: true, message: 'Metrics Updated', data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/reports', upload.single('reportFile'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });

    let data = await InvestorData.findOne();
    const fileSizeMB = (req.file.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    // File link save karne ka tareeka
    const fileUrl = process.env.NODE_ENV === 'production' 
      ? req.file.path 
      : req.file.path.replace(/\\/g, "/");

    data.reports.push({
      title: req.body.title,
      year: req.body.year,
      fileSize: fileSizeMB,
      fileUrl: fileUrl
    });

    await data.save();
    res.json({ success: true, message: 'Report Uploaded Successfully', data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/reports/:id', async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    data.reports = data.reports.filter(r => r._id.toString() !== req.params.id);
    await data.save();
    res.json({ success: true, message: 'Report Deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;





//Live achaa chalta hua code
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const InvestorData = require('../models/InvestorData');

// // 🔥 10MB LIMIT & ANY FILE EXTENSION SETUP
// const storage = multer.diskStorage({
//   // Agar tum Cloudinary use kar rahe ho, toh apne existing multer setup se isko replace kar lena
//   destination: function (req, file, cb) { cb(null, 'uploads/'); },
//   filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
// });
// const upload = multer({ 
//   storage: storage, 
//   limits: { fileSize: 10 * 1024 * 1024 } // 10 MB limit
// });

// // 1. GET ALL INVESTOR DATA
// router.get('/', async (req, res) => {
//   try {
//     let data = await InvestorData.findOne();
//     if (!data) data = await InvestorData.create({}); // Pehli baar document banayega
//     res.json({ success: true, data });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// // 2. UPDATE METRICS
// router.put('/metrics', async (req, res) => {
//   try {
//     let data = await InvestorData.findOne();
//     data.metrics = req.body;
//     await data.save();
//     res.json({ success: true, message: 'Metrics Updated', data });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// // 3. UPLOAD NEW REPORT (FILE)
// router.post('/reports', upload.single('reportFile'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });

//     let data = await InvestorData.findOne();
    
//     const fileSizeMB = (req.file.size / (1024 * 1024)).toFixed(1) + ' MB';
//     const fileUrl = req.file.path.replace(/\\/g, "/"); // Normalize path

//     data.reports.push({
//       title: req.body.title,
//       year: req.body.year,
//       fileSize: fileSizeMB,
//       fileUrl: fileUrl
//     });

//     await data.save();
//     res.json({ success: true, message: 'Report Uploaded', data });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// // 4. DELETE REPORT
// router.delete('/reports/:id', async (req, res) => {
//   try {
//     let data = await InvestorData.findOne();
//     data.reports = data.reports.filter(r => r._id.toString() !== req.params.id);
//     await data.save();
//     res.json({ success: true, message: 'Report Deleted' });
//   } catch (err) { res.status(500).json({ success: false, message: err.message }); }
// });

// module.exports = router;