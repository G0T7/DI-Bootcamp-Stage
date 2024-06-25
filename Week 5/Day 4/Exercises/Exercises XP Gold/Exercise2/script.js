// main.js

// Function to make a paragraph draggable and change font size based on position
function makeParagraphDraggableAndResizable() {
    const paragraph = document.getElementById('draggable-paragraph');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Mouse down event to start dragging
    paragraph.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - paragraph.getBoundingClientRect().left;
        offsetY = event.clientY - paragraph.getBoundingClientRect().top;
    });

    // Mouse move event to update paragraph position and font size
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;

            // Update paragraph position
            paragraph.style.left = `${newX}px`;
            paragraph.style.top = `${newY}px`;

            // Change font size based on vertical position
            const fontSize = Math.abs(newY) / 5; // Adjust this value to control font size
            paragraph.style.fontSize = `${fontSize}px`;
        }
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Call the function to make the paragraph draggable and resizable when the page loads
window.addEventListener('load', makeParagraphDraggableAndResizable);
