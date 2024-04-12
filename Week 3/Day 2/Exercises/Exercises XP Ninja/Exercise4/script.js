// Prompt the user for a number
let number = parseInt(prompt("Please enter a number:"));

// Initialize the result variable
let result = "";

// Check if the number is less than 2
if (number < 2) {
    result = "boom";
} else {
    // Add "o" characters to the result based on the number
    for (let i = 0; i < number; i++) {
        result += "o";
    }
    
    // Check if the number is divisible by 2
    if (number % 2 === 0) {
        result += "!";
    }
    
    // Check if the number is divisible by 5
    if (number % 5 === 0) {
        result = result.toUpperCase();
    }
    
    // Check if the number is divisible by both 2 and 5
    if (number % 2 === 0 && number % 5 === 0) {
        result += "!";
    }
}

// Output the result
console.log(result);
