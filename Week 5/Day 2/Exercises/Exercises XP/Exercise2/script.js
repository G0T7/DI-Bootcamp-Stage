document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the form and log it
    const form = document.getElementById('userForm');
    console.log(form);

    // Retrieve inputs by their id and log them
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    console.log(firstNameInput);
    console.log(lastNameInput);

    // Retrieve inputs by their name attribute and log them
    const inputsByName = document.getElementsByName('firstname');
    console.log(inputsByName);

    // Add submit event listener to the form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the values of the input fields
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        // Check if input values are not empty
        if (firstName !== '' && lastName !== '') {
            // Create list items for each input value
            const firstNameItem = document.createElement('li');
            firstNameItem.textContent = firstName;

            const lastNameItem = document.createElement('li');
            lastNameItem.textContent = lastName;

            // Append list items to the <ul> element
            const usersAnswerList = document.querySelector('.usersAnswer');
            usersAnswerList.innerHTML = ''; // Clear previous entries
            usersAnswerList.appendChild(firstNameItem);
            usersAnswerList.appendChild(lastNameItem);
        }
    });
});
