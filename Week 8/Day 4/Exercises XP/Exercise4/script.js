const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// Using the filter() method to create a new array containing only the students who passed the course
const passedStudents = students.filter(student => student.isPassed);

// Bonus: Chaining filter() method with forEach() method to congratulate each passed student
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});

//Good job Ray, you passed the course in Computer Science//
//Good job Jenner, you passed the course in Information Technology//
//Good job Marco, you passed the course in Robotics//
