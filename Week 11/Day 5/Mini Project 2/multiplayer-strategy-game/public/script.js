const gameBoard = document.getElementById('game-board');
const moveUpBtn = document.getElementById('move-up');
const moveDownBtn = document.getElementById('move-down');
const moveLeftBtn = document.getElementById('move-left');
const moveRightBtn = document.getElementById('move-right');

let currentPlayer = 'player1';

// Initialize game board
function initializeGameBoard() {
  gameBoard.innerHTML = '';
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('board-cell');
      if (row === players[currentPlayer].base.x && col === players[currentPlayer].base.y) {
        cell.textContent = 'Base';
        cell.classList.add('base');
      }
      gameBoard.appendChild(cell);
    }
  }
}

// Make move function
function makeMove(direction) {
  fetch('/makeMove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ direction, playerId: currentPlayer })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    initializeGameBoard();
  })
  .catch(error => console.error('Error making move:', error));
}

// Event listeners for move buttons
moveUpBtn.addEventListener('click', () => {
  makeMove('up');
});

moveDownBtn.addEventListener('click', () => {
  makeMove('down');
});

moveLeftBtn.addEventListener('click', () => {
  makeMove('left');
});

moveRightBtn.addEventListener('click', () => {
  makeMove('right');
});

// Initialize game board on page load
initializeGameBoard();
