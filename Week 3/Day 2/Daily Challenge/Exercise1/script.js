const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove "Banana" from the array
fruits.shift();

// Sort the array in alphabetical order
fruits.sort();

// Add "Kiwi" to the end of the array
fruits.push("Kiwi");

// Remove "Apples" from the array
let index = fruits.indexOf("Apples");
if (index !== -1) {
    fruits.splice(index, 1);
}

// Sort the array in reverse order
fruits.reverse();

// Output the final array
console.log(fruits);
