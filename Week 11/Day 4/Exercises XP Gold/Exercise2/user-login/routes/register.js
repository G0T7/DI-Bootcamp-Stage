const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route: POST /api/register
router.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
