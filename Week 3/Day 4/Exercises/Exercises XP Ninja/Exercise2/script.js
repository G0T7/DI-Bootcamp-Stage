// Without using regular expressions:


// Ask the client for their zip code
let zipCode = prompt("Please enter your zip code:");

// Check if the zip code meets the requirements
if (zipCode.length === 5 && !isNaN(zipCode) && !zipCode.includes(" ")) {
    console.log("success");
} else {
    console.log("error");
}

