
// Function to create draggable squares for each letter from A to Z
function createAlphabetSquares() {
    const container = document.getElementById('container');

    // Loop through each letter of the alphabet (A to Z)
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); // Convert ASCII code to letter

        // Create a square element with the letter inside
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = letter;

        // Set initial position for the square (random position within the container)
        const left = Math.random() * (container.clientWidth - 50);
        const top = Math.random() * (container.clientHeight - 50);
        square.style.left = `${left}px`;
        square.style.top = `${top}px`;

        // Make the square draggable
        makeDraggable(square);

        // Append the square to the container
        container.appendChild(square);
    }
}

// Function to make an element draggable
function makeDraggable(element) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Mouse down event to start dragging
    element.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
    });

    // Mouse move event to update element position
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;

            // Update the position of the element
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        }
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Call the function to create alphabet squares when the page loads
window.addEventListener('load', createAlphabetSquares);
