// Function Declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}

// Invoking the function declaration
console.log(kgToGramsDeclaration(5)); // Output: 5000

// Function Expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};

// Invoking the function expression
console.log(kgToGramsExpression(5)); // Output: 5000

/* 
Difference between function declaration and function expression:
Function declaration is defined using the function keyword followed by a function name, whereas function expression assigns a function to a variable. One key difference is that function declarations are hoisted, meaning they can be called before they're defined, while function expressions are not hoisted.

*/

// One-line Arrow Function
const kgToGramsArrow = kg => kg * 1000;

// Invoking the one-line arrow function
console.log(kgToGramsArrow(5)); // Output: 5000
