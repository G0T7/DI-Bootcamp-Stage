function capitalize(str) {
    let resultEven = '';
    let resultOdd = '';

    for (let i = 0; i < str.length; i++) {
        // Check if index is even
        if (i % 2 === 0) {
            // Capitalize letter and append to resultEven
            resultEven += str[i].toUpperCase();
            // Append lowercase letter to resultOdd
            resultOdd += str[i];
        } else {
            // Append lowercase letter to resultEven
            resultEven += str[i];
            // Capitalize letter and append to resultOdd
            resultOdd += str[i].toUpperCase();
        }
    }

    return [resultEven, resultOdd];
}


console.log(capitalize("abcdef")); // Output: ['AbCdEf', 'aBcDeF']
