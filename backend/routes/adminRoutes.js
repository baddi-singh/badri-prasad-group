const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Temporary Static Admin
const ADMIN_ID = "admin";
const ADMIN_PASS_HASH = bcrypt.hashSync("Admin@123", 10); // Default password: Admin@123

router.post('/login', async (req, res) => {
  const { userId, password } = req.body;

  if (userId === ADMIN_ID && bcrypt.compareSync(password, ADMIN_PASS_HASH)) {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || 'BadriGroupSecretKey', { expiresIn: '1d' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Credentials' });
  }
});

module.exports = router;