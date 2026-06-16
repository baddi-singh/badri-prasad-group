const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  vertical: { type: String },
  status: { type: String },
  desc: { type: String },
  websiteUrl: { type: String, default: '' },
  team: [{
    memberName: { type: String },
    designation: { type: String },
    image: { type: String }
  }],
  isDeleted: { type: Boolean, default: false },
  priority: { type: Number, default: 999 } // Naya field dynamic sorting ke liye
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);










// Running code
// const mongoose = require('mongoose');

// const companySchema = new mongoose.Schema({
//   name: { type: String },
//   vertical: { type: String },
//   status: { type: String },
//   desc: { type: String },
//   websiteUrl: { type: String, default: '' }, // <--- URL Field
//   team: [{
//     memberName: { type: String },
//     designation: { type: String },
//     image: { type: String }
//   }],
//   isDeleted: { type: Boolean, default: false }
// }, { timestamps: true });

// module.exports = mongoose.model('Company', companySchema);