// Prompt the user for a number and save it to a variable
let userInput = prompt("Please enter a number:");

// Convert the user input to a number
let number = parseInt(userInput);

// Check whether the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number");
}
