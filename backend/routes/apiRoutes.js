const express = require('express');
const router = express.Router();
// Custom auth middleware (agar required hai toh)
// const { protect } = require('../middleware/authMiddleware');
const Inquiry = require('../models/Inquiry'); 

// ==========================================
// 1. PUBLIC ROUTE: Jab koi user website par form bharta hai
// ==========================================
router.post('/contact', async (req, res) => {
  try {
    const { name, email, vertical, message } = req.body;
    
    // DB mein save karna
    const newInquiry = await Inquiry.create({ name, email, vertical, message });
    res.status(201).json({ success: true, message: 'Inquiry Submitted Successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// ==========================================
// 2. GET ROUTE: Dashboard ke liye inquiries laana
// ==========================================
router.get('/', async (req, res) => {
  try {
    // Agar protect middleware use kar rahe hain toh router.get('/', protect, async...) kar dein
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }); 
    res.status(200).json({ success: true, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch data' });
  }
});

// ==========================================
// 3. INQUIRY ACTION ROUTES (TRASH, RESTORE, DELETE)
// ==========================================
router.patch('/:id/trash', async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'Moved to trash' });
  } catch (err) { 
    res.status(500).json({ success: false, message: err.message }); 
  }
});

router.patch('/:id/restore', async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: false });
    res.json({ success: true, message: 'Restored successfully' });
  } catch (err) { 
    res.status(500).json({ success: false, message: err.message }); 
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Permanently deleted' });
  } catch (err) { 
    res.status(500).json({ success: false, message: err.message }); 
  }
});

module.exports = router;







// const express = require('express');
// const router = express.Router();
// const { protect } = require('../middleware/authMiddleware');
// // Man lijiye aapne MongoDB model banaya hai 'Inquiry' naam se
// const Inquiry = require('../models/Inquiry'); 

// // 1. PUBLIC ROUTE: Jab koi user website par form bharta hai
// router.post('/contact', async (req, res) => {
//   try {
//     const { name, email, vertical, message } = req.body;
    
//     // DB mein save karna
//     const newInquiry = await Inquiry.create({ name, email, vertical, message });
    
//     res.status(201).json({ success: true, message: 'Inquiry Submitted Successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });

// // 2. SECURE ROUTE: Command Center ke liye data fetch karna (PROTECTED)
// router.get('/admin/inquiries', protect, async (req, res) => {
//   try {
//     // Sirf wahi ye API hit kar sakta hai jiske paas JWT token ho
//     const inquiries = await Inquiry.find().sort({ createdAt: -1 }); // Naya sabse upar
//     res.status(200).json({ success: true, data: inquiries });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to fetch data' });
//   }
// });

// // 1. SOFT DELETE (Move to Trash)
// router.patch('/:id/trash', async (req, res) => {
//   try {
//     // Model ka naam Inquiry ya Application hoga aapki file ke hisaab se
//     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true }); 
//     res.json({ success: true, message: 'Moved to trash' });
//   } catch (err) { res.status(500).json({ success: false }); }
// });

// // 2. RESTORE FROM TRASH
// router.patch('/:id/restore', async (req, res) => {
//   try {
//     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: false });
//     res.json({ success: true, message: 'Restored successfully' });
//   } catch (err) { res.status(500).json({ success: false }); }
// });

// // 3. HARD DELETE (Permanent)
// router.delete('/:id', async (req, res) => {
//   try {
//     await Inquiry.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: 'Permanently deleted' });
//   } catch (err) { res.status(500).json({ success: false }); }
// });



// module.exports = router;