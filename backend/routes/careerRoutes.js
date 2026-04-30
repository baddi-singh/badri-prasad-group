const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary'); // Naya Cloudinary Storage
const Application = require('../models/Application');
const { protect } = require('../middleware/authMiddleware'); // Dashboard Security ke liye

// ==========================================
// MULTER CONFIGURATION FOR PDF (Cloudinary)
// ==========================================
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Sirf PDF files allowed hain!'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// ==========================================
// 1. POST ROUTE (Frontend Form Submit - Public)
// ==========================================
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Resume upload (PDF) required or file was blocked' });
    }

    const { fullName, email, phone, targetCompany, role } = req.body;

    // FIX: Ab Cloudinary direct URL deta hai (https://...), toh backslash (/) change karne ka jhanjhat khatam!
    const cloudUrl = req.file.path; 

    const newApplication = await Application.create({
      fullName,
      email,
      phone,
      targetCompany,
      role,
      resumePath: cloudUrl 
    });

    res.status(201).json({ success: true, data: newApplication });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// 2. GET ROUTE (For Admin Dashboard - Secure)
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
// 3. ACTION ROUTES (TRASH, RESTORE, DELETE - Secure)
// ==========================================
router.patch('/:id/trash', protect, async (req, res) => {
  try {
    await Application.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'Moved to trash' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.patch('/:id/restore', protect, async (req, res) => {
  try {
    await Application.findByIdAndUpdate(req.params.id, { isDeleted: false });
    res.json({ success: true, message: 'Restored successfully' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Permanently deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;