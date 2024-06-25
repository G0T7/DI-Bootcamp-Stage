// Function to calculate tip amount and final bill
function calculateTip() {
    // Prompting the user for the amount of the bill
    let billAmount = parseFloat(prompt("Enter the amount of the bill:"));

    let tipPercentage;
    // Determining tip percentage based on the bill amount
    if (billAmount < 50) {
        tipPercentage = 0.2; // 20%
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipPercentage = 0.15; // 15%
    } else {
        tipPercentage = 0.1; // 10%
    }

    // Calculating tip amount
    let tipAmount = billAmount * tipPercentage;
    // Calculating final bill (bill amount + tip amount)
    let finalBill = billAmount + tipAmount;

    // Logging the tip amount and final bill
    console.log("Tip amount:", tipAmount);
    console.log("Final bill (bill + tip):", finalBill.toFixed(2));
}

// Calling the calculateTip function
calculateTip();
