function createCalendar(year, month) {
    const daysInMonth = new Date(year, month, 0).getDate(); // Get total days in the month
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // Get day of the week for the 1st day

    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });

    // Create a container div dynamically
    const container = document.createElement('div');
    container.classList.add('calendar-container'); // Optional: Add a CSS class to style the container

    // Create the table element
    const table = document.createElement('table');

    // Create table header row
    const headerRow = table.insertRow();
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });

    // Calculate days to display in the calendar
    let date = 1;
    for (let i = 0; i < 6; i++) { // 6 rows to cover all potential month lengths
        const row = table.insertRow();

        for (let j = 0; j < 7; j++) { // 7 cells (days) per row
            const cell = row.insertCell();

            if (i === 0 && j < firstDayOfWeek) {
                // Empty cells before the first day of the month
                cell.textContent = '';
            } else if (date > daysInMonth) {
                // No more days left in the month
                break;
            } else {
                // Display the day of the month
                cell.textContent = date;
                date++;
            }
        }

        if (date > daysInMonth) {
            break;
        }
    }

    // Append the table to the container
    container.appendChild(table);

    // Clear previous calendar if exists
    const existingContainer = document.querySelector('.calendar-container');
    if (existingContainer) {
        existingContainer.remove();
    }

    // Append the container to the body or any other desired element
    document.body.appendChild(container);
}

// Usage example:
createCalendar(2012, 9); // Generate calendar for September 2012
