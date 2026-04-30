const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  phone: { type: String },
  targetCompany: { type: String },
  role: { type: String },
  resumePath: { type: String }, // <---- YEH WALI LINE MISSING THI 100%!
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);







// const mongoose = require('mongoose');

// const applicationSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   targetCompany: { type: String, required: true }, // Removed enum to prevent future crashes
//   role: { type: String, required: true },
//   resumePath: { type: String, required: true },
//   status: { type: String, default: 'new', enum: ['new', 'reviewed', 'shortlisted', 'rejected'] },
//   isDeleted: { type: Boolean, default: false } // <--- Added for TRASH feature
// }, { timestamps: true });

// module.exports = mongoose.model('Application', applicationSchema);





// const mongoose = require('mongoose');


// const applicationSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   targetCompany: { // Kis subsidiary mein apply kar raha hai
//     type: String,
//     required: true,
//     enum: ['Badri Smart Integrations', 'Badri Real Estate', 'Badri Venture Studio', 'Badri Travels', 'Social Tailors', 'Badri Digital Solutions']
//   },
//   role: {
//     type: String,
//     required: true,
//   },
//   resumePath: { // Ye sabse important hai - Resume kahan save hua hai
//     type: String,
//     required: true
//   },
//   status: { // Admin ke liye
//     type: String,
//     default: 'new',
//     enum: ['new', 'reviewed', 'shortlisted', 'rejected']
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Application', applicationSchema);
// // isDeleted: { type: Boolean, default: false }
