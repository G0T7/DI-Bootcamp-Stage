// Global variable to store all bold items
let allBoldItems;

// Function to collect all bold items inside the paragraph
function getBoldItems() {
    const paragraph = document.querySelector('p');
    allBoldItems = paragraph.querySelectorAll('strong');
}

// Function to highlight all bold text in blue
function highlight() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = 'blue';
        });
    }
}

// Function to reset all bold text color to black
function returnItemsToDefault() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = 'black';
        });
    }
}

// Call getBoldItems() to collect bold items when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    getBoldItems();

    // Add event listeners for mouseover and mouseout events
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});
