// routes/updatePost.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint to update an existing post
router.put('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;
  const { title, body } = req.body;

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      id: postId,
      title,
      body
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error updating post with id ${postId}:`, error.message);
    res.status(500).send(`Failed to update post with id ${postId}`);
  }
});

module.exports = router;
