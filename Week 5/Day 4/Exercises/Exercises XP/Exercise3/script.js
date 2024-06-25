

// Get references to the target and box elements
const target = document.getElementById('target');
const box = document.getElementById('box');

let isDragging = false; // Flag to indicate if box is being dragged

// Function to handle mouse down event on the box
box.addEventListener('mousedown', (event) => {
    isDragging = true; // Start dragging
    // Calculate the initial offset between mouse position and box position
    const offsetX = event.clientX - box.offsetLeft;
    const offsetY = event.clientY - box.offsetTop;

    // Function to handle mouse move event while dragging
    const handleMouseMove = (event) => {
        if (isDragging) {
            // Update box position based on mouse movement
            box.style.left = (event.clientX - offsetX) + 'px';
            box.style.top = (event.clientY - offsetY) + 'px';
        }
    };

    // Function to handle mouse up event to stop dragging
    const handleMouseUp = () => {
        isDragging = false; // Stop dragging
        // Remove event listeners for mouse move and mouse up
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        // Check if box is dropped inside the target
        const targetRect = target.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        if (
            boxRect.left >= targetRect.left &&
            boxRect.right <= targetRect.right &&
            boxRect.top >= targetRect.top &&
            boxRect.bottom <= targetRect.bottom
        ) {
            // Box is dropped inside the target
            console.log('Box dropped inside the target!');
        }
    };

    // Add event listeners for mouse move and mouse up
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});
