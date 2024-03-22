// Function to calculate the average of grades
function findAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

// Function to determine if the student passed or failed
function checkResult(average) {
    if (average > 65) {
        console.log("Congratulations! You passed.");
    } else {
        console.log("Sorry, you failed. You must repeat the course.");
    }
}

// Example grades list
let grades = [80, 75, 90, 60, 55];

// Calculating average using findAvg function
let averageGrade = findAvg(grades);

// Displaying the average
console.log("Average grade:", averageGrade);

// Checking if the student passed or failed using checkResult function
checkResult(averageGrade);
