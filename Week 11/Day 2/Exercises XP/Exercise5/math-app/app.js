// app.js
// Require the lodash package and the custom math module
const _ = require("lodash");
const math = require("./math");

// Use the exported functions from the math module and the utility functions from lodash
const num1 = 5;
const num2 = 10;

console.log("Sum:", math.add(num1, num2));
console.log("Product:", math.multiply(num1, num2));

// Example of using lodash utility functions
const array = [1, 2, 3, 4, 5];
console.log("Sum of array elements:", _.sum(array));
