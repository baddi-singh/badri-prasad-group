const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

// ==========================================
// MIDDLEWARES & SECURITY
// ==========================================

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5001',
  'http://localhost:3000',
  'https://www.badriprasadgroup.com',
  'https://badriprasadgroup.com',
  'https://test.badriprasadgroup.com',
  'https://www.test.badriprasadgroup.com',
  'https://www.badridigitalsolutions.com',
  'https://badridigitalsolutions.com',
  'https://test.badridigitalsolutions.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS Policy: This origin is not allowed access.'));
    }
  },
  credentials: true 
}));

app.use(helmet());
app.use(cookieParser()); 
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200, 
  message: { success: false, message: "Too many requests from this IP. Please wait 15 minutes." }
});
app.use('/api', apiLimiter);

app.use('/uploads', express.static('uploads')); 

// ==========================================
// DB CONNECTION (Asli Database ka naam print hoga)
// ==========================================
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Local-BPG')
  .then((conn) => console.log(` MongoDB Connected to: ${conn.connection.name}`))
  .catch((err) => console.log('DB Error:', err));

// ==========================================
// ROUTES
// ==========================================
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/careers', require('./routes/careerRoutes')); 
app.use('/api/admin', require('./routes/adminRoutes')); 
app.use('/api/companies', require('./routes/companyRoutes')); 
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/investors', require('./routes/investorRoutes'));
app.use('/api/leadership', require('./routes/leadershipRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running securely on port ${PORT}`));





// good working code
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const cookieParser = require('cookie-parser'); // 🔥 DEVIL FIX: Cookie parser import kiya

// // Env & App setup
// dotenv.config();
// const app = express();

// // ==========================================
// // MIDDLEWARES & SECURITY
// // ==========================================

// // Allowed Domains List
// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://localhost:5001',
//   'http://localhost:3000',

//   // Badri Prasad Group - Production
//   'https://www.badriprasadgroup.com',
//   'https://badriprasadgroup.com',

//   // Badri Prasad Group - Staging
//   'https://test.badriprasadgroup.com',
//   'https://www.test.badriprasadgroup.com',

//   // Badri Digital Solutions
//   'https://www.badridigitalsolutions.com',
//   'https://badridigitalsolutions.com',
//   'https://test.badridigitalsolutions.com'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
//       return callback(null, true);
//     } else {
//       const msg = 'CORS Policy: This origin is not allowed access.';
//       return callback(new Error(msg), false);
//     }
//   },
//   credentials: true // 🔥 IMPORTANT: Cookies allow karne ke liye true hona zaruri hai
// }));

// app.use(helmet());
// app.use(cookieParser()); // 🔥 DEVIL FIX: Server ko cookies read karna sikhaya
// app.use(express.json());

// // Rate Limiter: 15 minute mein max 200 requests
// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 200, 
//   message: { success: false, message: "Too many requests from this IP. Please wait 15 minutes." }
// });
// app.use('/api', apiLimiter);

// // Local uploads serve karne ke liye
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
// app.use('/api/leadership', require('./routes/leadershipRoutes'));

// // ==========================================
// // START SERVER
// // ==========================================
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running securely on port ${PORT}`));








// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');

// // Env & App setup
// dotenv.config();
// const app = express();

// // ==========================================
// // MIDDLEWARES & SECURITY
// // ==========================================

// // Allowed Domains List
// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://localhost:5001',
//   'http://localhost:3000',

//   // Badri Prasad Group - Production
//   'https://www.badriprasadgroup.com',
//   'https://badriprasadgroup.com',

//   // Badri Prasad Group - Staging
//   'https://test.badriprasadgroup.com',
//   'https://www.test.badriprasadgroup.com',

//   // Badri Digital Solutions
//   'https://www.badridigitalsolutions.com',
//   'https://badridigitalsolutions.com',
//   'https://test.badridigitalsolutions.com'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Mobile apps, Postman ya server-to-server calls allow karo
//     if (!origin) return callback(null, true);
    
//     // Check if origin list mein hai ya Vercel staging preview URL hai
//     if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
//       return callback(null, true);
//     } else {
//       const msg = 'CORS Policy: This origin is not allowed access.';
//       return callback(new Error(msg), false);
//     }
//   },
//   credentials: true
// }));
// app.use(helmet());
// app.use(express.json());

// // Rate Limiter: 15 minute mein max 200 requests
// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 200, 
//   message: { success: false, message: "Too many requests from this IP. Please wait 15 minutes." }
// });
// app.use('/api', apiLimiter);

// // Local uploads serve karne ke liye
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
// app.use('/api/leadership', require('./routes/leadershipRoutes'));

// // ==========================================
// // START SERVER
// // ==========================================
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running securely on port ${PORT}`));










// Running code
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

// // VIP CORS Setup: Local, Main, aur Staging URLs ko allow karne ke liye
// const allowedOrigins = [
//   'http://localhost:5173',

//   // Badri Prasad Group - Production
//   'https://www.badriprasadgroup.com',
//   'https://badriprasadgroup.com',

//   // Badri Prasad Group - Staging
//   'https://test.badriprasadgroup.com',

//   // Badri Digital Solutions - keep for later
//   'https://www.badridigitalsolutions.com',
//   'https://badridigitalsolutions.com',
//   'https://test.badridigitalsolutions.com'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Mobile apps ya curl requests (jisme origin nahi hota) ko allow karne ke liye
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'CORS Policy: This origin is not allowed access.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));

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
// app.use('/api/leadership', require('./routes/leadershipRoutes'));

// // ==========================================
// // START SERVER
// // ==========================================
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running securely on port ${PORT}`));

