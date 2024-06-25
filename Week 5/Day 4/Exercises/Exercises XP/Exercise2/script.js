

function myMove() {
    const container = document.getElementById('container');
    const animateBox = document.getElementById('animate');

    let position = 0; // Initial position of the box

    const intervalId = setInterval(() => {
        if (position >= container.clientWidth - animateBox.clientWidth) {
            clearInterval(intervalId); // Stop moving when the box reaches the end
        } else {
            position++; // Increment the position by 1 pixel
            animateBox.style.left = position + 'px'; // Update the box position
        }
    }, 1); // Move 1 pixel every millisecond
}
