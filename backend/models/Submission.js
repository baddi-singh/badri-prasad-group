const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true, 
    enum: ['client', 'career'] // Ye fix karta hai ki data sirf in do types ka ho
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  vertical: { type: String, required: true }, // e.g., 'Badri Travels'
  message: { type: String, required: true }, // Client ke liye inquiry, Career ke liye Role/Profile
  date: { 
    type: String, 
    default: () => new Date().toLocaleDateString('en-GB') // DD/MM/YYYY format
  }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);