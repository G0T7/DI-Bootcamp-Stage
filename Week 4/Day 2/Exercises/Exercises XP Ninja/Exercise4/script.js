function biggestNumberInArray(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return 0;
    }

    // Initialize the maximum number to the first element of the array
    let maxNumber = array[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < array.length; i++) {
        // Update maxNumber if the current element is greater
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }

    return maxNumber;
}


const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1)); // Output: 100
console.log(biggestNumberInArray(array2)); // Output: 4
console.log(biggestNumberInArray(array3)); // Output: 0
