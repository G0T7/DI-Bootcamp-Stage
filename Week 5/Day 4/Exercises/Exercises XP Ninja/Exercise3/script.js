// Function to create a bubble
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Randomly position the bubble
    const size = Math.random() * 30 + 10; // Random size between 10px and 40px
    const positionX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 8 + 5; // Random animation duration between 5s and 13s

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${positionX}px`;
    bubble.style.animationDuration = `${animationDuration}s`;

    // Append bubble to the bubble container
    const bubbleContainer = document.getElementById('bubble-container');
    bubbleContainer.appendChild(bubble);

    // Remove bubble after animation completes
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Generate bubbles at intervals
setInterval(createBubble, 1000); // Create a bubble every 1 second (1000 milliseconds)
