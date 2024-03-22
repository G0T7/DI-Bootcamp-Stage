// Function to find numbers divisible by 23 and their sum
function isDivisible() {
    let sum = 0;
    let divisibleBy23 = [];

    // Loop through numbers 0 to 500
    for (let i = 0; i <= 500; i++) {
        // Check if the number is divisible by 23
        if (i % 23 === 0) {
            divisibleBy23.push(i);
            sum += i;
            console.log(i);
        }
    }

    // Log the sum of numbers divisible by 23
    console.log("Sum:", sum);
}

// Calling the isDivisible function
console.log("Numbers divisible by 23:");
isDivisible();

// Bonus: Function to find numbers divisible by a given divisor and their sum
function isDivisibleBy(divisor) {
    let sum = 0;
    let divisibleByDivisor = [];

    // Loop through numbers 0 to 500
    for (let i = 0; i <= 500; i++) {
        // Check if the number is divisible by the given divisor
        if (i % divisor === 0) {
            divisibleByDivisor.push(i);
            sum += i;
            console.log(i);
        }
    }

    // Log the sum of numbers divisible by the given divisor
    console.log("Sum:", sum);
}

// Calling the isDivisibleBy function with different divisors
console.log("\nNumbers divisible by 3:");
isDivisibleBy(3);

console.log("\nNumbers divisible by 45:");
isDivisibleBy(45);
