// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array of emojis with their names
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects as needed
];

// Generate a random emoji from the array
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Route to start the game
app.get('/api/start', (req, res) => {
    const emoji = getRandomEmoji();
    res.json({ emoji });
});

// Route to check the answer
app.post('/api/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctAnswer = emojis.find(e => e.emoji === emoji).name;
    const isCorrect = guess === correctAnswer;
    res.json({ correct: isCorrect });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
