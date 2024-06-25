// Prompt the user for the first number and store it in num1
let num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number and store it in num2
let num2 = parseFloat(prompt("Enter the second number:"));

// Addition
let sum = num1 + num2;
alert("The sum is: " + sum);

// BONUS: Subtraction
let difference = num1 - num2;
alert("The difference is: " + difference);

// BONUS: Multiplication
let product = num1 * num2;
alert("The product is: " + product);

// BONUS: Division
if (num2 !== 0) {
    let quotient = num1 / num2;
    alert("The quotient is: " + quotient);
} else {
    alert("Cannot divide by zero.");
}