const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const InvestorData = require('../models/InvestorData');
const { protect } = require('../middleware/authMiddleware'); // 🔥 DEVIL FIX: Yahan add kiya

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

// GET: Public Route - Sab data dekho
router.get('/', async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    if (!data) data = await InvestorData.create({}); 
    res.json({ success: true, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// PUT: Metrics Update karna (🔒 LOCKED)
router.put('/metrics', protect, async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    data.metrics = req.body;
    await data.save();
    res.json({ success: true, message: 'Metrics Updated', data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// POST: Nayi Report Upload karna (🔒 LOCKED)
router.post('/reports', protect, upload.single('reportFile'), async (req, res) => {
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

// DELETE: Report Delete karna (🔒 LOCKED)
router.delete('/reports/:id', protect, async (req, res) => {
  try {
    let data = await InvestorData.findOne();
    data.reports = data.reports.filter(r => r._id.toString() !== req.params.id);
    await data.save();
    res.json({ success: true, message: 'Report Deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;