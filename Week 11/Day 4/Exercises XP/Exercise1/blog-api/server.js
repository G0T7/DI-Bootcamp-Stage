// Import necessary modules
const express = require('express');
const app = express();
const port = 3000; // Specify the port

// Body parser middleware to parse JSON request body
app.use(express.json());

// Simulated database (array of blog posts)
let data = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
  { id: 3, title: 'Third Post', content: 'This is the third blog post.' }
];

// Route to get all blog posts
app.get('/posts', (req, res) => {
  res.json(data);
});

// Route to get a specific blog post by id
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find(post => post.id === postId);

  if (!post) {
    res.status(404).send('Post not found');
  } else {
    res.json(post);
  }
});

// Route to create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: data.length + 1, title, content };
  data.push(newPost);
  res.status(201).json(newPost);
});

// Route to update an existing blog post by id
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  let post = data.find(post => post.id === postId);

  if (!post) {
    res.status(404).send('Post not found');
  } else {
    post.title = title;
    post.content = content;
    res.json(post);
  }
});

// Route to delete a blog post by id
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  data = data.filter(post => post.id !== postId);
  res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
