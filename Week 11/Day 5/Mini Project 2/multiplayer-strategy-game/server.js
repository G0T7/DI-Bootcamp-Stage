const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Game state
let players = {
  player1: {
    base: { x: 0, y: 0 },
    position: { x: 0, y: 0 }
  },
  player2: {
    base: { x: 9, y: 9 },
    position: { x: 9, y: 9 }
  }
};

// Routes

// Placeholder route for user registration
app.post('/register', (req, res) => {
  // Placeholder logic for registering a user
  res.send('User registered');
});

// Placeholder route for user login
app.post('/login', (req, res) => {
  // Placeholder logic for logging in a user
  res.send('User logged in');
});

// Start a new game session
app.post('/startGame', (req, res) => {
  players.player1.position = { x: 0, y: 0 };
  players.player2.position = { x: 9, y: 9 };
  res.send('Game started');
});

// Make a move
app.post('/makeMove', (req, res) => {
  const direction = req.body.direction;
  const playerId = req.body.playerId;
  const player = players[playerId];
  let newPosition = { x: player.position.x, y: player.position.y };

  switch (direction) {
    case 'up':
      newPosition.y -= 1;
      break;
    case 'down':
      newPosition.y += 1;
      break;
    case 'left':
      newPosition.x -= 1;
      break;
    case 'right':
      newPosition.x += 1;
      break;
    default:
      return res.status(400).send('Invalid direction');
  }

  // Check if move is valid
  if (isValidMove(newPosition)) {
    // Check if move captures opponent's base
    const opponentId = opponent(playerId);
    if (newPosition.x === players[opponentId].base.x && newPosition.y === players[opponentId].base.y) {
      res.send(`Player ${playerId} wins!`);
    } else {
      // Update player position
      player.position = newPosition;
      res.send(`Player ${playerId} moved to (${newPosition.x}, ${newPosition.y})`);
    }
  } else {
    res.status(400).send('Invalid move');
  }
});

// Check for a winner
app.post('/checkWinner', (req, res) => {
  // Check if game is won
  if (players.player1.position.x === players.player2.base.x && players.player1.position.y === players.player2.base.y) {
    res.send('Player 1 wins!');
  } else if (players.player2.position.x === players.player1.base.x && players.player2.position.y === players.player1.base.y) {
    res.send('Player 2 wins!');
  } else {
    res.send('Game not won');
  }
});

// Helper function to check if move is valid
function isValidMove(newPosition) {
  return (newPosition.x >= 0 && newPosition.x < 10 && newPosition.y >= 0 && newPosition.y < 10);
}

// Helper function to get opponent's ID
function opponent(playerId) {
  return playerId === 'player1' ? 'player2' : 'player1';
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
