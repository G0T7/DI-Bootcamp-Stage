// app.js

const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// In-memory array to store todo objects
let todos = [];

// Routes and Handlers
// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Get a specific todo
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Please include a title for your todo' });
  }
  
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  let todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = title || todo.title;
  todo.completed = completed || todo.completed;

  res.json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
