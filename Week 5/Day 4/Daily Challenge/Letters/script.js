document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('letterInput');
    const displayParagraph = document.getElementById('displayLetters');

    inputField.addEventListener('input', function(event) {
        const inputText = event.target.value;

        // Use a regular expression to keep only letters (a-z, A-Z)
        const filteredText = inputText.replace(/[^a-zA-Z]/g, '');

        // Update the input field value with the filtered text
        inputField.value = filteredText;

        // Display the filtered letters in the paragraph
        displayParagraph.textContent = filteredText;
    });
});