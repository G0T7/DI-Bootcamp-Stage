function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original string is equal to its reverse
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
