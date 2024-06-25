// Import necessary modules
const express = require('express');
const dataService = require('./data/dataService');

// Create an instance of an Express app
const app = express();
const port = 5000; // Specify the port

// Middleware to parse JSON request body
app.use(express.json());

// Route to fetch posts from JSONPlaceholder API
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await dataService.fetchPosts();
    console.log('Posts fetched successfully');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).send('Failed to fetch posts');
  }
});

// Set up the app to listen on port 5000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
