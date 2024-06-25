// Function to start the Hangman game
function startHangman() {
    // Prompt Player 1 for a word (minimum 8 letters)
    let secretWord = prompt("Player 1: Enter a word (minimum 8 letters):");

    // Validate the length of the secret word
    while (!isValidWord(secretWord)) {
        secretWord = prompt("Word must be at least 8 letters long. Enter a new word:");
    }

    // Initialize game state
    let remainingAttempts = 10;
    let guessedLetters = new Set();
    let hiddenWord = Array(secretWord.length).fill('*');

    console.log("Let's play Hangman!");
    console.log("Word to guess: " + hiddenWord.join(''));

    // Game loop
    while (remainingAttempts > 0 && hiddenWord.includes('*')) {
        let guess = prompt(`Remaining attempts: ${remainingAttempts}\nGuessed letters: ${[...guessedLetters].join(', ')}\nGuess a letter:`).toLowerCase();

        // Check if the guess is valid (single letter and not already guessed)
        if (!isValidGuess(guess) || guessedLetters.has(guess)) {
            console.log("Invalid guess. Please try again.");
            continue;
        }

        guessedLetters.add(guess);

        if (secretWord.includes(guess)) {
            updateHiddenWord(secretWord, hiddenWord, guess);
            console.log("Correct guess!");
        } else {
            remainingAttempts--;
            console.log("Incorrect guess! Try again.");
        }

        console.log("Word: " + hiddenWord.join(''));
    }

    // Determine game outcome
    if (!hiddenWord.includes('*')) {
        console.log("Congratulations! You guessed the word: " + secretWord);
    } else {
        console.log("Out of attempts! The word was: " + secretWord);
    }
}

// Function to validate the length of the word
function isValidWord(word) {
    return word.length >= 8;
}

// Function to validate the guess (single letter)
function isValidGuess(guess) {
    return guess.length === 1 && /^[a-z]$/.test(guess);
}

// Function to update the hidden word with correctly guessed letters
function updateHiddenWord(secretWord, hiddenWord, letter) {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            hiddenWord[i] = letter;
        }
    }
}

// Start the Hangman game
startHangman();
