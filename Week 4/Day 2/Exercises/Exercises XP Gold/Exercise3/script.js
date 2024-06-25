function swapCase(str) {
    // Create an empty string to store the result
    let swapped = "";

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // Convert uppercase character to lowercase and add to the result
            swapped += char.toLowerCase();
        } else {
            // Convert lowercase character to uppercase and add to the result
            swapped += char.toUpperCase();
        }
    }

    return swapped;
}

console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'
