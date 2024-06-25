// routes/createPost.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint to create a new post
router.post('/api/posts', async (req, res) => {
  const { title, body, userId } = req.body;

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId
    });
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).send('Failed to create post');
  }
});

module.exports = router;
