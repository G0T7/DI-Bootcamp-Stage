// Function to play the guessing game
function playTheGame() {
    const wantToPlay = confirm("Would you like to play the guessing game?");

    if (!wantToPlay) {
        alert("No problem, Goodbye");
        return;
    }

    let userNumber;

    while (true) {
        const userInput = prompt("Enter a number between 0 and 10:");

        if (userInput === null) {
            alert("Goodbye");
            return;
        }

        userNumber = parseInt(userInput);

        if (!isNaN(userNumber) && userNumber >= 0 && userNumber <= 10) {
            break; // Break the loop if valid number is entered
        } else {
            alert("Sorry, please enter a valid number between 0 and 10.");
        }
    }

    const computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(userNumber, computerNumber);
}

// Function to compare user's number with computer's number
function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;

    while (attempts < 3) {
        if (userNumber === computerNumber) {
            alert("Congratulations! You guessed the correct number.");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = parseInt(prompt("Your number is bigger than the computer's, guess again:"));
        } else {
            userNumber = parseInt(prompt("Your number is smaller than the computer's, guess again:"));
        }

        if (isNaN(userNumber)) {
            alert("Sorry, not a number. Goodbye");
            return;
        }

        attempts++;
    }

    alert("Out of chances. The correct number was " + computerNumber);
}
