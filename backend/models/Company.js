const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String },
  vertical: { type: String },
  status: { type: String },
  desc: { type: String },
  websiteUrl: { type: String, default: '' }, // <--- URL Field
  team: [{
    memberName: { type: String },
    designation: { type: String },
    image: { type: String }
  }],
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);