function changeEnough(itemPrice, amountOfChange) {
    // Calculate the total amount of change in dollars
    let totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;

    // Check if the total amount of change is enough to afford the item
    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true
