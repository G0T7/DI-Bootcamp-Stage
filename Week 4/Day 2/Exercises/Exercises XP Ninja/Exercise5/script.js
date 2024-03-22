function uniqueElements(array) {
    // Create a Set from the array to remove duplicates
    const uniqueSet = new Set(array);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}


const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(uniqueElements(list)); // Output: [1, 2, 3, 4, 5]
