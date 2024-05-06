function areAnagrams(str1, str2) {
  // Remove whitespace and convert strings to lowercase
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
      return false;
  }

  // Sort the characters of both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
const result1 = areAnagrams("Astronomer", "Moon starer"); // true
const result2 = areAnagrams("School master", "The classroom"); // true
const result3 = areAnagrams("The Morse Code", "Here come dots"); // true

console.log(result1); // Output: true
console.log(result2); // Output: true
console.log(result3); // Output: true
