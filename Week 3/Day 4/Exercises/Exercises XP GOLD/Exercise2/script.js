// Ask the user for their grade
let grade = parseFloat(prompt("Please enter your grade:"));

// Check the grade and assign a letter grade accordingly
if (grade > 90) {
    console.log("A");
} else if (grade >= 80 && grade <= 90) {
    console.log("B");
} else if (grade >= 70 && grade < 80) {
    console.log("C");
} else {
    console.log("D");
}
