const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

// Create an array called shoppingList
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate total price of shopping list
function myBill() {
    let totalPrice = 0;

    // Loop through items in shopping list
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];

        // Check if item is in stock
        if (item in stock && stock[item] > 0) {
            // If item is in stock, find its price and add to total price
            totalPrice += prices[item];
            // Decrease the item's stock by 1 as a bonus
            stock[item]--;
        } else {
            console.log(item + " is out of stock.");
        }
    }

    return totalPrice;
}

// Call the myBill() function
let total = myBill();
console.log("Total price of shopping list:", total);
