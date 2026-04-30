const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Get ALL news (Active + Trashed dono bheje ga)
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }); // FIX: Yahan se filter hata diya
    res.json({ success: true, data: news });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Create new news
router.post('/', async (req, res) => {
  try {
    const newNews = new News(req.body);
    await newNews.save();
    res.json({ success: true, data: newNews });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Update news
router.put('/:id', async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: updatedNews });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Move to Trash (Soft Delete)
router.patch('/:id/trash', async (req, res) => {
  try {
    await News.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'News moved to trash' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Restore from Trash
router.patch('/:id/restore', async (req, res) => {
  try {
    await News.findByIdAndUpdate(req.params.id, { isDeleted: false });
    res.json({ success: true, message: 'News restored' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Permanent Delete (Hard Delete)
router.delete('/:id', async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'News permanently deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;