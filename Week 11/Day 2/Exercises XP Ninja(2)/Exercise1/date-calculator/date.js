// date.js

function timeUntilNewYear() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1); // January 1st of the next year

    const timeDiff = newYear - now; // Time difference in milliseconds

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `The 1st of January is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

export { timeUntilNewYear };
