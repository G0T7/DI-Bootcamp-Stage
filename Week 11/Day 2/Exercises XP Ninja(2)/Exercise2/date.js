// date.js

function calculateMinutesLived(birthdate) {
    // Assuming birthdate is provided in the format 'YYYY-MM-DD'
    const birthDate = new Date(birthdate);
    const now = new Date();

    // Calculate the difference in milliseconds
    const timeDiff = now - birthDate;

    // Convert milliseconds to minutes
    const minutesLived = Math.floor(timeDiff / (1000 * 60));

    return `You have lived approximately ${minutesLived} minutes.`;
}

export { calculateMinutesLived };
