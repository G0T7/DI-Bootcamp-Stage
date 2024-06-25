// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getAllPostsRouter = require('./routes/getAllPosts');
const getPostByIdRouter = require('./routes/getPostById');
const createPostRouter = require('./routes/createPost');
const updatePostRouter = require('./routes/updatePost');
const deletePostRouter = require('./routes/deletePost');

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use(getAllPostsRouter);
app.use(getPostByIdRouter);
app.use(createPostRouter);
app.use(updatePostRouter);
app.use(deletePostRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
