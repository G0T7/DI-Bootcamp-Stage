function validateFullName(fullName) {
  // Regular expression for validating full name
  const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

  // Check if the full name matches the regex pattern
  if (nameRegex.test(fullName)) {
      return true; // Valid full name
  } else {
      return false; // Invalid full name
  }
}

// Example usage:
const fullName1 = "John Doe";
const fullName2 = "Jane Smith";
const fullName3 = "john doe"; // Should be invalid due to lowercase first letters
const fullName4 = "Mary Elizabeth Johnson"; // Should be invalid due to more than one space

console.log(validateFullName(fullName1)); // Output: true
console.log(validateFullName(fullName2)); // Output: true
console.log(validateFullName(fullName3)); // Output: false
console.log(validateFullName(fullName4)); // Output: false
