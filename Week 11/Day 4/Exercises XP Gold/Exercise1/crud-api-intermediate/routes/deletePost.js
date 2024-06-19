// routes/deletePost.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint to delete a post
router.delete('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.data) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(`Error deleting post with id ${postId}:`, error.message);
    res.status(500).send(`Failed to delete post with id ${postId}`);
  }
});

module.exports = router;
