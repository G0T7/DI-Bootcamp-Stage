function bottlesOfBeer() {
    // Prompt the user for the starting number of bottles
    let bottles = parseInt(prompt("Enter the number of bottles to start the song with:"));

    // Validate user input
    if (isNaN(bottles) || bottles < 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    // Loop to generate the song lyrics
    while (bottles > 0) {
        // Determine the correct grammar for "bottle" or "bottles"
        let bottleText = bottles === 1 ? "bottle" : "bottles";
        let nextBottles = bottles - 1;
        let nextBottleText = nextBottles === 1 ? "bottle" : "bottles";

        // Output the current verse of the song
        console.log(`${bottles} ${bottleText} of beer on the wall`);
        console.log(`${bottles} ${bottleText} of beer`);
        console.log(`Take ${bottles === 1 ? "it" : "one"} down, pass ${bottles === 1 ? "it" : "one"} around`);
        
        // Update the remaining bottles count
        bottles = nextBottles;

        // Output the remaining bottles on the wall
        if (nextBottles > 0) {
            console.log(`${nextBottles} ${nextBottleText} of beer on the wall\n`);
        } else {
            console.log(`No more bottles of beer on the wall\n`);
        }
    }

    // Final verse of the song
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

// Call the function to start the song
bottlesOfBeer();
