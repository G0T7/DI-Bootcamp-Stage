// colorful-message.js

// Use dynamic import() to import chalk (ES Module)
const chalkPromise = import('chalk');

// Function to create and display a colorful message
async function displayColorfulMessage() {
    const chalk = await chalkPromise;
    console.log(chalk.default.blue.bold('This is a colorful message!'));
}

// Export the function
module.exports = displayColorfulMessage;
