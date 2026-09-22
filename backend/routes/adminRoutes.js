const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const incomingUser = (req.body.email || req.body.userId || '').trim();
  const incomingPass = (req.body.password || '').trim();

  // Agar .env me variables nahi hain toh default values ye rahengi
  const adminId = (process.env.ADMIN_EMAIL || 'contact@badriprasadgroup.com').trim();
  const adminPass = (process.env.ADMIN_PASSWORD || 'Badri123@').trim();

  // Debugging console logs
  console.log("-----------------------------------------");
  console.log("📩 UI se aaya User:", incomingUser);
  console.log("🔑 UI se aaya Pass:", incomingPass);
  console.log("⚙️  Backend ka User:", adminId);
  console.log("⚙️  Backend ka Pass:", adminPass);
  console.log("-----------------------------------------");

  if (!adminPass) {
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  if (incomingUser === adminId && incomingPass === adminPass) {
    const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1d' });
    
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    return res.json({ success: true, message: 'Secure login successful', token });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('adminToken');
  res.json({ success: true, message: 'Logged out securely' });
});

module.exports = router;










// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Temporary Static Admin
// const ADMIN_ID = "admin";
// const ADMIN_PASS_HASH = bcrypt.hashSync("Admin@123", 10); // Default password: Admin@123

// router.post('/login', async (req, res) => {
//   const { userId, password } = req.body;

//   if (userId === ADMIN_ID && bcrypt.compareSync(password, ADMIN_PASS_HASH)) {
//     const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || 'BadriGroupSecretKey', { expiresIn: '1d' });
//     res.json({ success: true, token });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid Credentials' });
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const rateLimit = require('express-rate-limit');

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5 // limit each IP to 5 requests per windowMs
// });

// router.post('/login', limiter, (req, res) => {
//   const { email, password } = req.body;
  
//   const adminId = process.env.ADMIN_EMAIL || 'admin';
//   const adminPass = process.env.ADMIN_PASSWORD; 

//   if (!adminPass) {
//     return res.status(500).json({ success: false, message: 'Server configuration error' });
//   }

//   if (email === adminId && password === adminPass) {
//     const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
//     // 🔥 DEVIL FIX: Token ab secure cookie mein jayega, JSON mein nahi
//     res.cookie('adminToken', token, {
//       httpOnly: true, // Browser scripts (jaise hacker ki script) isko padh nahi payengi
//       secure: process.env.NODE_ENV === 'production', // Production me sirf HTTPS par chalega
//       sameSite: 'strict', // CSRF attacks ko rokne ke liye
//       maxAge: 24 * 60 * 60 * 1000 // 1 din
//     });

//     res.json({ success: true, message: 'Secure login successful' });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// // Cookie destroy karne ke liye logout route
// router.post('/logout', (req, res) => {
//   res.clearCookie('adminToken');
//   res.json({ success: true, message: 'Logged out securely' });
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const rateLimit = require('express-rate-limit');

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 10 
// });

// router.post('/login', limiter, (req, res) => {
//   // Frontend chahe 'email' bheje ya 'userId', dono ko pakdo
//   const incomingUser = (req.body.email || req.body.userId || '').trim();
//   const incomingPass = (req.body.password || '').trim();

//   const adminId = (process.env.ADMIN_EMAIL || 'admin').trim();
//   const adminPass = (process.env.ADMIN_PASSWORD || '').trim();

//   // Terminal par exact values print karo (Debugging ke liye)
//   console.log("-----------------------------------------");
//   console.log("📩 UI se aaya User:", incomingUser);
//   console.log("🔑 UI se aaya Pass:", incomingPass);
//   console.log("⚙️  Backend .env ka User:", adminId);
//   console.log("⚙️  Backend .env ka Pass:", adminPass);
//   console.log("-----------------------------------------");

//   if (!adminPass) {
//     return res.status(500).json({ success: false, message: 'Server configuration error: ADMIN_PASSWORD missing in .env' });
//   }

//   if (incomingUser === adminId && incomingPass === adminPass) {
//     const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET || 'fallbackSecret', { expiresIn: '1d' });
    
//     res.cookie('adminToken', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 24 * 60 * 60 * 1000
//     });

//     return res.json({ success: true, message: 'Secure login successful', token });
//   } else {
//     return res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// router.post('/logout', (req, res) => {
//   res.clearCookie('adminToken');
//   res.json({ success: true, message: 'Logged out securely' });
// });

// module.exports = router;
















// working code hai
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// const rateLimit = require('express-rate-limit');

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5 // limit each IP to 5 requests per windowMs
// });

// router.post('/login', limiter, (req, res) => {
//   const { email, password } = req.body;
  
//   // .env file se secure ID aur Password uthayega
//   const adminId = process.env.ADMIN_EMAIL || 'admin';
//   const adminPass = process.env.ADMIN_PASSWORD; 

//   if (!adminPass) {
//     return res.status(500).json({ success: false, message: 'Server configuration error' });
//   }

//   if (email === adminId && password === adminPass) {
//     // JWT_SECRET bhi strong hona chahiye
//     const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.json({ success: true, token });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// module.exports = router;