// date.js
import { Holidays } from 'date-holidays';

// Hardcoded list of holidays for demonstration
const holidays = [
    { date: '2024-07-04', name: 'Independence Day' },
    { date: '2024-09-02', name: 'Labor Day' },
    { date: '2024-10-14', name: 'Columbus Day' },
    { date: '2024-11-11', name: 'Veterans Day' },
    { date: '2024-11-28', name: 'Thanksgiving' },
    { date: '2024-12-25', name: 'Christmas' }
];

function calculateTimeUntilNextHoliday() {
    // Find the next upcoming holiday
    const now = new Date();
    let nextHolidayDate;
    let holidayName;

    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        if (holidayDate > now && (!nextHolidayDate || holidayDate < nextHolidayDate)) {
            nextHolidayDate = holidayDate;
            holidayName = holiday.name;
        }
    }

    // Calculate the difference in milliseconds
    let timeDiff = nextHolidayDate - now;

    // If the next holiday is in the past, calculate for the next year
    if (timeDiff < 0) {
        const nextYear = new Date().getFullYear() + 1;
        for (const holiday of holidays) {
            const holidayDate = new Date(`${nextYear}-${holiday.date.slice(5)}`); // Adjust year
            if (holidayDate > now && (!nextHolidayDate || holidayDate < nextHolidayDate)) {
                nextHolidayDate = holidayDate;
                holidayName = holiday.name;
            }
        }
        timeDiff = nextHolidayDate - now;
    }

    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `The next holiday is ${holidayName} in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

export { calculateTimeUntilNextHoliday };
