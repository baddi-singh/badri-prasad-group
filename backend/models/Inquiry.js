const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please add a name'] },
  email: { type: String, required: [true, 'Please add an email'] },
  vertical: { type: String, required: true }, // Travels, IT, etc.
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', InquirySchema);