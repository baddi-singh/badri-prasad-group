// working code
// const jwt = require('jsonwebtoken');

// const protect = (req, res, next) => {
//   let token;

//   // 1. Pehle Check: Kya token HTTP-Only Cookie mein hai? (Production/Browser method)
//   if (req.cookies && req.cookies.adminToken) {
//     token = req.cookies.adminToken;
//   } 
//   // 2. Dusra Check: Agar cookie nahi hai, toh Header mein check karo (Postman testing ke liye)
//   else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   // Agar dono jagah token nahi mila
//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
//   }

//   // Token verify karo
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = decoded; // Valid admin data request ke saath attach kar do
//     next();
//   } catch (error) {
//     console.error("Token verification failed:", error.message);
//     res.status(401).json({ success: false, message: 'Not authorized, token failed' });
//   }
// };

// module.exports = { protect };


// // const jwt = require('jsonwebtoken');

// // const protect = (req, res, next) => {
// //   let token;
// //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //     try {
// //       token = req.headers.authorization.split(' ')[1];
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET || 'BadriGroupSecretKey');
// //       req.adminId = decoded.id;
// //       next(); 
// //     } catch (error) {
// //       console.error(error);
// //       res.status(401).json({ success: false, message: 'Not authorized, token failed' });
// //     }
// //   }

// //   if (!token) {
// //     res.status(401).json({ success: false, message: 'Not authorized, no token found' });
// //   }
// // };

// // module.exports = { protect };



const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // 1. Check HTTP-Only Cookie (Browser Client)
  if (req.cookies && req.cookies.adminToken) {
    token = req.cookies.adminToken;
  } 
  // 2. Check Auth Header (Postman / Old LocalStorage Fallback)
  else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Token nahi mila
  if (!token) {
    console.log("❌ Auth Blocked: No token found in Cookies or Headers");
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }

  // Token verify karo
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Valid admin attach ho gaya
    next();
  } catch (error) {
    console.error("❌ Token verification failed:", error.message);
    res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};

module.exports = { protect };