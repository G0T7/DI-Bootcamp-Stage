const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert the array to a string using .toString() method
console.log("Array as string using toString():", numbers.toString());

// Convert the array to a string using .join() method with different separators
console.log("Array as string using join(+):", numbers.join("+"));
console.log("Array as string using join( ):", numbers.join(" "));
console.log("Array as string using join(''):", numbers.join(""));

// Bubble Sort algorithm to sort the numbers array in descending order
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        // Comparing adjacent elements and swapping if necessary
        if (numbers[j] < numbers[j + 1]) {
            // Swapping using a temporary variable
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    // Logging the array after each pass of the outer loop
    console.log("Array after pass", i + 1, ":", numbers);
}

// Logging the final sorted array
console.log("Sorted array in descending order:", numbers);
