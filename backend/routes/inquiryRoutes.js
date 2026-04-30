const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const sendEmail = require('../utils/sendEmail');
const { protect } = require('../middleware/authMiddleware');

router.post('/', async (req, res) => {
  try {
    const newInquiry = await Inquiry.create(req.body);
    
    // Send Email Notification
    await sendEmail(
      `New Contact Inquiry: ${req.body.name}`,
      `<h3>New Inquiry Received</h3>
       <p><b>Name:</b> ${req.body.name}</p>
       <p><b>Email:</b> ${req.body.email}</p>
       <p><b>Vertical:</b> ${req.body.vertical}</p>
       <p><b>Message:</b> ${req.body.message}</p>`
    );

    res.status(201).json({ success: true, data: newInquiry });
  } catch (error) { res.status(500).json({ success: false, error: error.message }); }
});

router.get('/', protect, async (req, res) => {
  const data = await Inquiry.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
});

router.patch('/:id/trash', protect, async (req, res) => {
  await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.json({ success: true });
});

router.delete('/:id', protect, async (req, res) => {
  await Inquiry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Inquiry = require('../models/Inquiry'); 

// // 1. POST ROUTE: Form Submit
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, vertical, message } = req.body;
//     const newInquiry = await Inquiry.create({ name, email, vertical, message });
//     res.status(201).json({ success: true, data: newInquiry });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // 2. GET ROUTE: Dashboard
// router.get('/', async (req, res) => {
//   try {
//     const inquiries = await Inquiry.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: inquiries });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ==========================================
// // 3. ACTION ROUTES (TRASH, RESTORE, DELETE)
// // ==========================================
// router.patch('/:id/trash', async (req, res) => {
//   try {
//     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: true });
//     res.json({ success: true, message: 'Moved to trash' });
//   } catch (err) { 
//     res.status(500).json({ success: false, message: err.message }); 
//   }
// });

// router.patch('/:id/restore', async (req, res) => {
//   try {
//     await Inquiry.findByIdAndUpdate(req.params.id, { isDeleted: false });
//     res.json({ success: true, message: 'Restored successfully' });
//   } catch (err) { 
//     res.status(500).json({ success: false, message: err.message }); 
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     await Inquiry.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: 'Permanently deleted' });
//   } catch (err) { 
//     res.status(500).json({ success: false, message: err.message }); 
//   }
// });

// module.exports = router;







// const express = require('express');
// const router = express.Router();
// const Inquiry = require('../models/Inquiry'); // Schema import

// router.post('/', async (req, res) => {
//   try {
//     console.log("---- ASLI ROUTE HIT HUA ----");
//     console.log("Data to save:", req.body);

//     // Ye line DB mein save karegi
//     const newInquiry = await Inquiry.create(req.body);
    
//     console.log("✅ DATA SAVED SUCCESS IN COMPASS:", newInquiry._id);

//     res.status(201).json({ success: true, data: newInquiry });
//   } catch (error) {
//     console.log("❌ Error:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });


// GET Route - Admin Dashboard ke liye saari inquiries lana
router.get('/', async (req, res) => {
  try {
    // .sort({ createdAt: -1 }) se sabse naya message sabse upar aayega
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;
