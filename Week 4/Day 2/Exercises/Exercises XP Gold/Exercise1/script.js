function isBlank(str) {
    // Check if the string is empty or contains only whitespace characters
    return !str.trim();
}

// Test cases
console.log(isBlank(''));   // --> true
console.log(isBlank('abc'));   // --> false
