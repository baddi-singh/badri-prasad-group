const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true // 'email' variable name hai, par isme aap 'admin123' bhi store kar sakte hain
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true,
    enum: ['admin', 'ceo', 'founder'] 
  }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);