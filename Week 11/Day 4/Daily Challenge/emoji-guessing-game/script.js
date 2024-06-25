const apiUrl = 'http://localhost:3000/api';

const emojiDisplay = document.getElementById('emoji-display');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const guessResult = document.getElementById('guess-result');

// Function to start the game
async function startGame() {
    try {
        const response = await fetch(`${apiUrl}/start`);
        const data = await response.json();
        emojiDisplay.textContent = data.emoji.emoji; // Set the emoji text
        guessInput.value = '';  // Clear the input field
        guessResult.textContent = '';  // Clear the previous result
    } catch (error) {
        console.error('Error starting game:', error);
    }
}

// Function to handle guess submission
async function handleGuess(event) {
    event.preventDefault();
    const guess = guessInput.value.trim();
    if (guess) {
        try {
            const response = await fetch(`${apiUrl}/guess`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ emoji: emojiDisplay.textContent, guess })
            });
            const data = await response.json();
            displayGuessResult(data.correct);
        } catch (error) {
            console.error('Error submitting guess:', error);
        }
    }
}

// Function to display guess result
function displayGuessResult(correct) {
    if (correct) {
        guessResult.textContent = 'Correct!';
        guessResult.style.color = 'green';
    } else {
        guessResult.textContent = 'Incorrect!';
        guessResult.style.color = 'red';
    }
    setTimeout(startGame, 2000); // Start a new game after 2 seconds
}

// Event listener for guess submission
guessForm.addEventListener('submit', handleGuess);

// Start the game
startGame();
