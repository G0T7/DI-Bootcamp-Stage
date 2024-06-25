// Function to render tasks
function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    tasks.forEach(task => {
        // Create list item
        const listItem = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.isCompleted; // Set checkbox state based on task status
        checkbox.addEventListener('change', () => {
            task.isCompleted = checkbox.checked; // Update task status when checkbox is toggled
            saveTasks(tasks); // Save updated tasks to local storage
        });

        // Create task name element
        const taskName = document.createElement('span');
        taskName.textContent = task.name;
        taskName.style.color = task.isCompleted ? 'green' : 'red'; // Change text color based on task status

        // Add elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskName);

        // Add list item to task list
        taskList.appendChild(listItem);
    });
}

// Sample tasks data
const tasks = [
    { name: 'Task 1', isCompleted: false },
    { name: 'Task 2', isCompleted: true },
    { name: 'Task 3', isCompleted: false }
];

// Render tasks on page load
window.onload = function() {
    renderTasks(tasks);
};

// Function to render tasks
function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    tasks.forEach((task, index) => {
        // Create list item
        const listItem = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.isCompleted; // Set checkbox state based on task status
        checkbox.addEventListener('change', () => {
            task.isCompleted = checkbox.checked; // Update task status when checkbox is toggled
            saveTasks(tasks); // Save updated tasks to local storage
            renderTasks(tasks); // Re-render tasks
        });

        // Create task name element
        const taskName = document.createElement('span');
        taskName.textContent = task.name;
        taskName.style.color = task.isCompleted ? 'green' : 'red'; // Change text color based on task status

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(index, 1); // Remove task from array
                saveTasks(tasks); // Save updated tasks to local storage
                renderTasks(tasks); // Re-render tasks
            }
        });

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newName = prompt('Enter new task name:');
            if (newName !== null && newName.trim() !== '') {
                task.name = newName; // Update task name
                saveTasks(tasks); // Save updated tasks to local storage
                renderTasks(tasks); // Re-render tasks
            }
        });

        // Add elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskName);
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        // Add list item to task list
        taskList.appendChild(listItem);
    });
}

// Function to render weekly chart
function renderWeeklyChart(tasks) {
    // Get reference to canvas element
    const canvas = document.getElementById('weeklyChart');
    const ctx = canvas.getContext('2d');

    // Generate data for each day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const taskCountByDay = [0, 0, 0, 0, 0, 0, 0]; // Initialize task count for each day

    // Loop through tasks and count tasks for each day
    tasks.forEach(task => {
        const startDate = new Date(task.startDate);
        const dayIndex = startDate.getDay(); // Get day index (0 for Sunday, 1 for Monday, etc.)
        taskCountByDay[dayIndex]++; // Increment task count for the corresponding day
    });

    // Create chart
    const weeklyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysOfWeek,
            datasets: [{
                label: 'Tasks',
                data: taskCountByDay,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
