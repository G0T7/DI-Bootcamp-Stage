const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for validating task data
const validateTaskData = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required fields." });
    }

    // If all required fields are present, move to the next middleware or route handler
    next();
};

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Route for retrieving all tasks
app.get('/tasks', (req, res, next) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            next(err); // Pass error to the error handling middleware
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Route for retrieving a specific task by ID
app.get('/tasks/:id', (req, res, next) => {
    const taskId = req.params.id;

    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            next(err);
            return;
        }

        const tasks = JSON.parse(data);
        const task = tasks.find(task => task.id === parseInt(taskId));

        if (!task) {
            res.status(404).json({ error: "Task not found." });
            return;
        }

        res.json(task);
    });
});

// Route for creating a new task
app.post('/tasks', validateTaskData, (req, res, next) => {
    const { title, description } = req.body;
    const newTask = { id: Date.now(), title, description };

    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            next(err);
            return;
        }

        const tasks = JSON.parse(data);
        tasks.push(newTask);

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), err => {
            if (err) {
                next(err);
                return;
            }
            res.status(201).json(newTask);
        });
    });
});

// Route for updating an existing task
app.put('/tasks/:id', validateTaskData, (req, res, next) => {
    const taskId = req.params.id;
    const { title, description } = req.body;

    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            next(err);
            return;
        }

        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex(task => task.id === parseInt(taskId));

        if (taskIndex === -1) {
            res.status(404).json({ error: "Task not found." });
            return;
        }

        tasks[taskIndex] = { id: parseInt(taskId), title, description };

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), err => {
            if (err) {
                next(err);
                return;
            }
            res.json(tasks[taskIndex]);
        });
    });
});

// Route for deleting a task by ID
app.delete('/tasks/:id', (req, res, next) => {
    const taskId = req.params.id;

    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            next(err);
            return;
        }

        let tasks = JSON.parse(data);
        tasks = tasks.filter(task => task.id !== parseInt(taskId));

        fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), err => {
            if (err) {
                next(err);
                return;
            }
            res.json({ message: "Task deleted successfully." });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
