// Regular expressions to delete vowels from the word


// Prompt the user for a word
let word = prompt("Please enter a word:");

// Define a regular expression pattern to match vowels
let vowelPattern = /[aeiou]/gi;

// Replace vowels with an empty string to delete them
let resultWithoutVowels = word.replace(vowelPattern, "");

// Log the result without vowels
console.log("Word without vowels:", resultWithoutVowels);


