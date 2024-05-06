let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// Arrow function to display fruits using forEach method
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Arrow function to clone groceries and manipulate variables
const cloneGroceries = () => {
    // Copying client variable
    let user = client;
    // Changing client variable
    client = "Betty";
    // We won't see this modification in the user variable because primitive types (like strings) are passed by value, not by reference.

    // Copying groceries object
    let shopping = {...groceries};
    // Changing the value of totalPrice key
    shopping.totalPrice = "35$";
    // We won't see this modification in the groceries object because objects are passed by reference, and when we copied the groceries object using spread syntax, a new reference was created.

    // Changing the value of paid key
    shopping.other.paid = false;
    // We will see this modification in the groceries object because objects within objects are still passed by reference, and the shopping object points to the same nested objects as the groceries object.
};

// Invoke the cloneGroceries function
cloneGroceries();
