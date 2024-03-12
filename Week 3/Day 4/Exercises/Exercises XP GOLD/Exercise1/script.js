// Ask the user which language they speak
let userInput = prompt("Which language do you speak?");

// Convert the user's answer to lowercase
userInput = userInput.toLowerCase();

// Use a switch-case statement to check the user's language
switch (userInput) {
    case "french":
        console.log("Bonjour");
        break;
    case "english":
        console.log("Hello");
        break;
    case "hebrew":
        console.log("Shalom");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001"); // Display binary for "sorry"
}
