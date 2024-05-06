const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

// Remove duplicate items in the array
const uniqueNumbers = [...new Set(numbers)];

console.log("Original array:", numbers);
console.log("Array after removing duplicates:", uniqueNumbers);
