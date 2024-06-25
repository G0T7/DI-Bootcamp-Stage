// Prompt the user for a verb
let verb = prompt("Please enter a verb:");

// Check conditions and modify the verb accordingly
if (verb.length >= 3 && !verb.endsWith("ing")) {
    console.log(verb + "ing");
} else if (verb.length >= 3 && verb.endsWith("ing")) {
    console.log(verb + "ly");
} else {
    console.log(verb);
}
