const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// Sample quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions as needed
];

// Endpoint to get a question
app.get('/api/question/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < questions.length) {
        res.json(questions[index]);
    } else {
        res.status(404).json({ error: 'Question not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
