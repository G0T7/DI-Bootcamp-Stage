function abbrevName(name) {
    // Split the name into an array of words
    let words = name.split(" ");
    
    // Get the first letter of the first name and convert it to uppercase
    let firstNameInitial = words[0].charAt(0).toUpperCase();

    // Get the first letter of the last name and convert it to uppercase
    let lastNameInitial = words[1].charAt(0).toUpperCase();

    // Return the abbreviated name
    return firstNameInitial + ". " + lastNameInitial + ".";
}

// Test case
console.log(abbrevName("Robin Singh")); // --> "Robin S."
