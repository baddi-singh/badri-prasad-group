const express = require('express');
const router = express.Router();
const Leadership = require('../models/Leadership');
const { protect } = require('../middleware/authMiddleware'); // 🔥 DEVIL FIX: Yahan add kiya

// GET: Saare leaders laane ke liye (Public - Website par dikhane ke liye)
router.get('/', async (req, res) => {
  try {
    const leaders = await Leadership.find();
    res.status(200).json({ success: true, data: leaders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// POST: Naya leader add karne ke liye (🔒 LOCKED)
router.post('/', protect, async (req, res) => {
  try {
    const leader = await Leadership.create(req.body);
    res.status(201).json({ success: true, data: leader });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT: Leader update karne ke liye (Edit) (🔒 LOCKED)
router.put('/:id', protect, async (req, res) => {
  try {
    const leader = await Leadership.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!leader) return res.status(404).json({ success: false, message: 'Leader not found' });
    res.status(200).json({ success: true, data: leader });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH: Leader ko Trash mein daalne ke liye (🔒 LOCKED)
router.patch('/:id/trash', protect, async (req, res) => {
  try {
    const leader = await Leadership.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
    res.status(200).json({ success: true, data: leader });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH: Trash se wapas laane ke liye (Restore) (🔒 LOCKED)
router.patch('/:id/restore', protect, async (req, res) => {
  try {
    const leader = await Leadership.findByIdAndUpdate(req.params.id, { isDeleted: false }, { new: true });
    res.status(200).json({ success: true, data: leader });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE: Hamesha ke liye delete karne ke liye (🔒 LOCKED)
router.delete('/:id', protect, async (req, res) => {
  try {
    await Leadership.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Leader deleted permanently' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;

































