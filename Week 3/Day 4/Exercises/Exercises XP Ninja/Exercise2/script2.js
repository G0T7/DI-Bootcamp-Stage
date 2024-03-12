//regular expressions

// Ask the client for their zip code
let zipCode = prompt("Please enter your zip code:");

// Define a regular expression pattern for zip code validation
let zipCodePattern = /^\d{5}$/;

// Check if the zip code matches the pattern
if (zipCodePattern.test(zipCode)) {
    console.log("success");
} else {
    console.log("error");
}