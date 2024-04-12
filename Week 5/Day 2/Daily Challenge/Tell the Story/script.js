function printFrame(words) {
    // Split the input string into an array of words
    const wordArray = words.split(',').map(word => word.trim());

    // Find the length of the longest word
    const maxLength = Math.max(...wordArray.map(word => word.length));

    // Print the top border of the frame
    console.log('*'.repeat(maxLength + 4));

    // Print each word with surrounding borders
    wordArray.forEach(word => {
        console.log(`* ${word.padEnd(maxLength, ' ')} *`);
    });

    // Print the bottom border of the frame
    console.log('*'.repeat(maxLength + 4));
}

// Prompt the user for words separated by commas
const input = prompt("Enter words separated by commas:");

// Call the function to print the frame
printFrame(input);

