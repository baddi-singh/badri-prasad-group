// backend/models/Leadership.js
const mongoose = require('mongoose');

const leadershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  category: { type: String, required: true }, // "Executive Committee" ya "Board of Directors"
  isDeleted: { type: Boolean, default: false } // Trash bin feature ke liye
}, { timestamps: true });

module.exports = mongoose.model('Leadership', leadershipSchema);