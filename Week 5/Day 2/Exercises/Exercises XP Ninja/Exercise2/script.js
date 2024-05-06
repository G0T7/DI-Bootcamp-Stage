//Validation Function with Regex//
function validateEmailWithRegex(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//Validation Function without Regex//
function validateEmailWithoutRegex(email) {
    if (!email) return false;
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

//Part 3: Event Listener for Form Submission//
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const emailInput = document.getElementById('emailInput').value;

    // Validate email using regex
    const isValidWithEmailRegex = validateEmailWithRegex(emailInput);
    
    // Validate email without regex
    const isValidWithEmailoutRegex = validateEmailWithoutRegex(emailInput);

    if (isValidWithEmailRegex) {
        alert('Email is valid (using regex)');
    } else {
        alert('Invalid email format (using regex)');
    }

    if (isValidWithEmailoutRegex) {
        alert('Email is valid (without regex)');
    } else {
        alert('Invalid email format (without regex)');
    }
});
