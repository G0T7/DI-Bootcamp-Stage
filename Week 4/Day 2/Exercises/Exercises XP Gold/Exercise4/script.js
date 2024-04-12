function isOmnipresent(arr, val) {
    // Iterate through each subarray in the main array
    for (let subarray of arr) {
        // Check if the value exists in the current subarray
        if (!subarray.includes(val)) {
            // If the value doesn't exist in the current subarray, return false
            return false;
        }
    }
    // If the value exists in every subarray, return true
    return true;
}


console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // Output: true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // Output: false
