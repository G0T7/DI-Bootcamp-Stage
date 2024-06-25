// routes/profile.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Mock database of registered users (in-memory)
let users = [];

// User profile
router.get('/api/profile', authenticateToken, (req, res) => {
  res.json(req.user);
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) {
      console.error('Error verifying token:', err.message);
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = users.find(u => u.id === user.userId);
    next();
  });
}

module.exports = router;
