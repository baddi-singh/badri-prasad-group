const mongoose = require('mongoose');

// File Uploads ke liye schema
const reportSchema = new mongoose.Schema({
  title: String,
  year: String,
  fileUrl: String, // Cloudinary ya local link
  fileSize: String, // Jaise "2.4 MB"
  createdAt: { type: Date, default: Date.now }
});

// Main Investor Metrics ke liye schema
const investorSchema = new mongoose.Schema({
  metrics: {
    assets: { type: String, default: '$4.2B' },
    growth: { type: String, default: '+45%' },
    markets: { type: String, default: '12+' },
    portfolio: { type: String, default: '25+' }
  },
  reports: [reportSchema] // Reports ki array
});

module.exports = mongoose.model('InvestorData', investorSchema);