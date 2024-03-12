// Ask the user for input
let userInput = prompt("Enter a string of numbers separated by commas:");

// Split the input string into an array of numbers
let numbersArray = userInput.split(",");

// Initialize a variable to store the sum
let sum = 0;

// Iterate through the array and add each number to the sum
for (let i = 0; i < numbersArray.length; i++) {
    // Convert each string element to a number and add it to the sum
    sum += parseInt(numbersArray[i]);
}

// Output the sum to the console
console.log("Sum of the numbers:", sum);
