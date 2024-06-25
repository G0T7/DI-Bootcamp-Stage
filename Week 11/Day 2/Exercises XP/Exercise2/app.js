// app.js
import persons from "./data.js";

// Function to calculate average age
function calculateAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Call the function and print the result
console.log("Average age:", calculateAverageAge(persons));
