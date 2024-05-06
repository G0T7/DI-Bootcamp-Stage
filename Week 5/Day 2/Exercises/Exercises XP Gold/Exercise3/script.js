// Array to store shopping list items
let shoppingList = [];

// Function to add item to the shopping list
function addItem() {
    const inputField = document.getElementById('itemInput');
    const newItem = inputField.value.trim();

    if (newItem !== '') {
        shoppingList.push(newItem);
        inputField.value = ''; // Clear the input field after adding item
        renderShoppingList(); // Update the displayed shopping list
    }
}

// Function to clear all items from the shopping list
function clearAll() {
    shoppingList = []; // Empty the shopping list array
    renderShoppingList(); // Update the displayed shopping list
}

// Function to render the shopping list on the page
function renderShoppingList() {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Clear the previous content

    const form = document.createElement('form');

    // Text input field for adding new items
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'itemInput';
    inputField.placeholder = 'Type an item...';
    form.appendChild(inputField);

    // AddItem button
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'AddItem';
    addItemBtn.type = 'button';
    addItemBtn.addEventListener('click', addItem);
    form.appendChild(addItemBtn);

    // ClearAll button
    const clearAllBtn = document.createElement('button');
    clearAllBtn.textContent = 'ClearAll';
    clearAllBtn.type = 'button';
    clearAllBtn.addEventListener('click', clearAll);
    form.appendChild(clearAllBtn);

    root.appendChild(form);

    // Display the shopping list items
    const listContainer = document.createElement('div');
    const listHeading = document.createElement('h3');
    listHeading.textContent = 'Shopping List';
    listContainer.appendChild(listHeading);

    const itemList = document.createElement('ul');
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
    listContainer.appendChild(itemList);

    root.appendChild(listContainer);
}

// Initialize the shopping list by rendering it on page load
document.addEventListener('DOMContentLoaded', renderShoppingList);
