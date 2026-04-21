const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

router.post('/', async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ success: true, data: inquiry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;