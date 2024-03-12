// Create a variable called sentence
let sentence = "This dinner is not that bad ! You cook well";

// Create variables to store the positions of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "not" and "bad" are found and if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace the substring "not...bad" with "good"
    let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log("The result is:", result);
} else {
    // Print the original sentence if conditions are not met
    console.log("The result is:", sentence);
}

console.log("***********");

