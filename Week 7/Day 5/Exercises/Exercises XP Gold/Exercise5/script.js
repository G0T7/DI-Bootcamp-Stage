const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Line up the Turtle and the Rabbit at the start line
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// Modify the position of the turtle
turtle = turtle.trim().padEnd(9, '=');

// Display the updated positions
console.log(startLine);
console.log(turtle);
console.log(rabbit);
