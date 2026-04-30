const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// 1. Sabhi Companies ki list lana (Active only)
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find({ isDeleted: false }).sort({ createdAt: -1 });
    res.json({ success: true, data: companies });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// 2. Nayi Company Add karna
router.post('/', async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json({ success: true, data: newCompany });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// 3. Company Update karna
router.put('/:id', async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: updated });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// 4. Soft Delete (Move to Trash)
router.patch('/:id/trash', async (req, res) => {
  try {
    await Company.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ success: true, message: 'Company moved to trash' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});


// ==========================================
// MAGIC SEED ROUTE (Sari purani companies DB me daalne ke liye)
// ==========================================
router.get('/seed', async (req, res) => {
  try {
    const seedData = [
      { name: "Badri Digital Solutions", vertical: "TECHNOLOGY", status: "Operational", desc: "Next-generation IoT and AI-driven automation solutions for enterprise ecosystems." },
      { name: "Badri Smart Integrations", vertical: "TECHNOLOGY", status: "Operational", desc: "Pioneering smart home systems and corporate security automation." },
      { name: "Badri Real Estate", vertical: "INFRASTRUCTURE", status: "Operational", desc: "Redefining luxury living and commercial spaces with sustainable architecture." },
      { name: "Badri Travels", vertical: "HOSPITALITY", status: "Operational", desc: "Premium global travel experiences, corporate fleet management, and luxury staycations." },
      { name: "Badri Venture Studio", vertical: "INVESTMENT", status: "Growing", desc: "Incubating and funding disruptive tech startups reshaping tomorrow's digital economy." },
      { name: "Social Tailors & Textile", vertical: "MEDIA & PR", status: "Operational", desc: "Crafting bespoke digital identities, brand narratives, and global PR campaigns." },
      { name: "Badri Capital", vertical: "FINANCIAL SERVICES", status: "Operational", desc: "Strategic wealth management, equity investments, and corporate finance solutions." },
      { name: "Badri Healthcare", vertical: "HEALTHCARE", status: "Growing", desc: "Advanced medical facilities, telemedicine, and accessible healthcare innovations." },
      { name: "Badri Logistics", vertical: "SUPPLY CHAIN", status: "Operational", desc: "Global supply chain solutions, smart warehousing, and efficient freight management." },
      { name: "Badri Energy", vertical: "RENEWABLE ENERGY", status: "Growing", desc: "Pioneering sustainable energy solutions, solar infrastructure, and green tech." },
      { name: "Badri Education", vertical: "EDTECH", status: "Operational", desc: "Empowering the next generation with modern educational platforms and digital learning." },
      { name: "Badri Media", vertical: "BROADCASTING", status: "Operational", desc: "Delivering high-quality entertainment, digital content, and media broadcasting." }
    ];

    // Check agar DB pehle se bhara toh nahi hai
    const count = await Company.countDocuments();
    if (count === 0) {
      await Company.insertMany(seedData);
      res.json({ success: true, message: "✅ Magic Success: All 12 Companies migrated to Database!" });
    } else {
      res.json({ success: true, message: "⚠️ Companies already exist in Database." });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


module.exports = router;