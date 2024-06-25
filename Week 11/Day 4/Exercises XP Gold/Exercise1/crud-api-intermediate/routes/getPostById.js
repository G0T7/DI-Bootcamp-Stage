// routes/getPostById.js
const express = require('express');
const router = express.Router();
const { fetchPosts } = require('../data/dataService');

// Endpoint to get a single post by id
router.get('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const posts = await fetchPosts();
    const post = posts.find(post => post.id.toString() === postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(`Error fetching post with id ${postId}:`, error.message);
    res.status(500).send(`Failed to fetch post with id ${postId}`);
  }
});

module.exports = router;
