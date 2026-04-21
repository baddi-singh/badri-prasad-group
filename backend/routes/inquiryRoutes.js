const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// @desc    Create new inquiry
// @route   POST /api/inquiries
router.post('/', async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ success: true, data: inquiry });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;