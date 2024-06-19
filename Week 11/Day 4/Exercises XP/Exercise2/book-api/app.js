// Import necessary modules
const express = require('express');
const app = express();
const port = 5000; // Specify the port

// Body parser middleware to parse JSON request body
app.use(express.json());

// Simulated database (array of books)
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
  { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2022 }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by id
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);

  if (!book) {
    res.status(404).send('Book not found');
  } else {
    res.json(book);
  }
});

// Route to create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Route to update a book by id
app.put('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;
  let book = books.find(book => book.id === bookId);

  if (!book) {
    res.status(404).send('Book not found');
  } else {
    book.title = title;
    book.author = author;
    book.publishedYear = publishedYear;
    res.json(book);
  }
});

// Route to delete a book by id
app.delete('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  books = books.filter(book => book.id !== bookId);
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
