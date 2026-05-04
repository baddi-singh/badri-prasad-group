const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit'); // Naya import for security

// Env & App setup
dotenv.config();
const app = express();

// ==========================================
// MIDDLEWARES & SECURITY
// ==========================================

// VIP CORS Setup: Local, Main, aur Staging URLs ko allow karne ke liye
const allowedOrigins = [
  'http://localhost:5173', 
  'https://www.badridigitalsolutions.com', 
  'https://badridigitalsolutions.com',
  'https://test.badridigitalsolutions.com' // Tumhara naya staging sub-domain
];

app.use(cors({
  origin: function (origin, callback) {
    // Mobile apps ya curl requests (jisme origin nahi hota) ko allow karne ke liye
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS Policy: This origin is not allowed access.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json()); // Frontend se data lene ke liye

// Rate Limiter: 15 minute ke andar ek IP se max 200 requests (Spam aur bot attacks rokne ke liye)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200, 
  message: { success: false, message: "Too many requests from this IP. Please wait 15 minutes." }
});
app.use('/api', apiLimiter);

// Purane local uploads ko serve karne ke liye (Taki purani testing wali files kaam karein)
app.use('/uploads', express.static('uploads')); 

// ==========================================
// DB CONNECTION
// ==========================================
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/BadriPrasadDB')
  .then(() => console.log('✅ MongoDB Connected: BadriPrasadDB'))
  .catch((err) => console.log('❌ DB Error:', err));

// ==========================================
// THE BRIDGE (Routes Registration)
// ==========================================
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/careers', require('./routes/careerRoutes')); 
app.use('/api/admin', require('./routes/adminRoutes')); 
app.use('/api/companies', require('./routes/companyRoutes')); 
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/investors', require('./routes/investorRoutes'));

// ==========================================
// START SERVER
// ==========================================
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running securely on port ${PORT}`));








// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const rateLimit = require('express-rate-limit'); // Naya import for security

// // Env & App setup
// dotenv.config();
// const app = express();

// // ==========================================
// // MIDDLEWARES & SECURITY
// // ==========================================
// app.use(cors());
// app.use(express.json()); // Frontend se data lene ke liye

// // Rate Limiter: 15 minute ke andar ek IP se max 200 requests (Spam aur bot attacks rokne ke liye)
// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 200, 
//   message: { success: false, message: "Too many requests from this IP. Please wait 15 minutes." }
// });
// app.use('/api', apiLimiter);

// // Purane local uploads ko serve karne ke liye (Taki purani testing wali files kaam karein)
// app.use('/uploads', express.static('uploads')); 

// // ==========================================
// // DB CONNECTION
// // ==========================================
// mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/BadriPrasadDB')
//   .then(() => console.log('✅ MongoDB Connected: BadriPrasadDB'))
//   .catch((err) => console.log('❌ DB Error:', err));

// // ==========================================
// // THE BRIDGE (Routes Registration)
// // ==========================================
// app.use('/api/inquiries', require('./routes/inquiryRoutes'));
// app.use('/api/careers', require('./routes/careerRoutes')); 
// app.use('/api/admin', require('./routes/adminRoutes')); 
// app.use('/api/companies', require('./routes/companyRoutes')); 
// app.use('/api/news', require('./routes/newsRoutes'));
// app.use('/api/investors', require('./routes/investorRoutes'));

// // ==========================================
// // START SERVER
// // ==========================================
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running securely on port ${PORT}`));