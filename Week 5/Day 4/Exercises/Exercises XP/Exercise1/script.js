// Part I: Call alert after 2 seconds
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II: Add paragraph to container after 2 seconds
setTimeout(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello World';
    container.appendChild(newParagraph);
}, 2000);

let paragraphCount = 0;
const container = document.getElementById('container');

// Part III: Add paragraphs with setInterval and clear
const intervalId = setInterval(() => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello World';
    container.appendChild(newParagraph);
    
    paragraphCount++;

    if (paragraphCount === 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Clear interval when button is clicked
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    clearInterval(intervalId);
});