// Function to calculate the volume of a sphere
function calculateVolume(radius) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume.toFixed(2); // Round the volume to 2 decimal places
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve radius input value
    const radiusInput = document.getElementById('radius');
    const radiusValue = parseFloat(radiusInput.value);

    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert('Please enter a valid positive number for radius.');
        return;
    }

    // Calculate the volume of the sphere
    const volume = calculateVolume(radiusValue);

    // Display the volume in the volume input field
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume;
}

// Add event listener for form submission
const form = document.getElementById('MyForm');
form.addEventListener('submit', handleFormSubmit);
