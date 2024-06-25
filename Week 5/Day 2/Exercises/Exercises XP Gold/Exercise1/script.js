document.addEventListener('DOMContentLoaded', function() {
    // Get the select element
    const selectElement = document.getElementById('genres');

    // Display the value of the selected option
    selectElement.addEventListener('change', function() {
        const selectedValue = selectElement.value;
        console.log('Selected Genre:', selectedValue);
    });

    // Set the default selected option
    selectElement.value = 'classic';
});
