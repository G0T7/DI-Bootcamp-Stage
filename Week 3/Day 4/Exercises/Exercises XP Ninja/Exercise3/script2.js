//BONUS: Replacing vowels with their corresponding numbers

// Prompt the user for a word
let word = prompt("Please enter a word:");

// Define a map for vowel replacement
let vowelMap = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
};

// Define a regular expression pattern to match vowels
let vowelPattern = /[aeiou]/gi;

// Replace vowels with their corresponding numbers
let resultWithNumbers = word.replace(vowelPattern, (match) => vowelMap[match.toLowerCase()]);

// Log the result with replaced vowels
console.log("Word with replaced vowels:", resultWithNumbers);
