// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.

// Using one loop
function printPatternOneLoop(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += '*'.repeat(i) + '\n';
    }
    console.log(pattern);
}

// Call the function 
printPatternOneLoop(6);

console.log("             ");


// Using nested for loops
function printPatternNestedLoops(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    console.log(pattern);
}

// Call the function 
printPatternNestedLoops(6);
