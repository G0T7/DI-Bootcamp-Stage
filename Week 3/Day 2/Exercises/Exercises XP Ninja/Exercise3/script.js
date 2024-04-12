// Ask the user to input a sentence
let sentence = prompt("Please enter a sentence containing the word 'Nemo':");

// Find the position of the word "Nemo" in the sentence
let nemoPosition = sentence.indexOf("Nemo");

// Check if "Nemo" was found in the sentence
if (nemoPosition !== -1) {
    console.log("I found Nemo at", nemoPosition);
} else {
    console.log("I can't find Nemo");
}
