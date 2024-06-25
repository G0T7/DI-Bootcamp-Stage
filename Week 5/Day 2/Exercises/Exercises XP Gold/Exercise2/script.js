document.addEventListener('DOMContentLoaded', function() {
    const removeColorBtn = document.getElementById('removeColorBtn');
    const colorSelect = document.getElementById('colorSelect');

    // Function to remove the selected color from the dropdown list
    function removeColor() {
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
        if (selectedOption) {
            colorSelect.removeChild(selectedOption);
            console.log(`Removed color: ${selectedOption.textContent}`);
        }
    }

    // Add click event listener to the button
    removeColorBtn.addEventListener('click', removeColor);
});
