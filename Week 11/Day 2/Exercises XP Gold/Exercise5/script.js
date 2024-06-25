function returnNumbers(str) {
  // Use regex to match digits in the string
  let numbers = str.match(/\d+/g);
  
  // Join the array of matched numbers into a single string
  if (numbers) {
      return numbers.join('');
  } else {
      return '';
  }
}

// Example usage:

console.log(returnNumbers('k5k3q2g5z6x9bn')); // Output: "532569"
console.log(returnNumbers('a1b2c3d4')); // Output: "1234"
console.log(returnNumbers('noNumbers')); // Output: ""
