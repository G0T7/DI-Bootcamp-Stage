const { format, addDays } = require('date-fns');

function performDateOperations() {
    // Get the current date and time
    const now = new Date();

    // Add 5 days to the current date
    const futureDate = addDays(now, 5);

    // Format the resulting date as a string
    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

    // Display the formatted date in the terminal
    console.log('Formatted date:', formattedDate);
}

module.exports = performDateOperations;
