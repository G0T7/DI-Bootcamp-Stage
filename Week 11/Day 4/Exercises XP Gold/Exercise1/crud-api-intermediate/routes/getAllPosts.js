// routes/getAllPosts.js
const express = require('express');
const router = express.Router();
const { fetchPosts } = require('../data/dataService');

// Endpoint to get all posts
router.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).send('Failed to fetch posts');
  }
});

module.exports = router;
