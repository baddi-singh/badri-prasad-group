const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, // Format: "October 15, 2026"
  category: { type: String, required: true }, // Format: "CORPORATE", "INFRASTRUCTURE"
  description: { type: String, required: true },
  linkUrl: { type: String, default: '' }, // "READ FULL STORY" pe click karne ke liye
  isDeleted: { type: Boolean, default: false } // Trash feature ke liye
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);