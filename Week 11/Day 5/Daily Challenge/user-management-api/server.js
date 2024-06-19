const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize users.json with an empty array if it doesn't exist
const usersFilePath = './users.json';
const initUsersFile = () => fs.writeFile(usersFilePath, '[]', 'utf8');
initUsersFile().catch(err => console.error('Error initializing users file:', err));

// Helper function to read users from the file
const readUsersFromFile = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users file:', err);
        return [];
    }
};

// Helper function to write users to the file
const writeUsersToFile = async (users) => {
    try {
        await fs.writeFile(usersFilePath, JSON.stringify(users), 'utf8');
    } catch (err) {
        console.error('Error writing users file:', err);
    }
};

// Route: Register a new user
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    try {
        const users = await readUsersFromFile();

        // Check if username or password already exist
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user object
        const newUser = {
            id: users.length + 1,
            name,
            lastName,
            email,
            username,
            password: hashedPassword
        };

        // Add user to the array and save to file
        users.push(newUser);
        await writeUsersToFile(users);

        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Error registering user');
    }
});

// Route: Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const users = await readUsersFromFile();

        // Find user by username
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Compare hashed passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).send('Invalid password');
        }

        res.send('Login successful');
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('Error logging in');
    }
});

// Route: Get all users (for demonstration purposes only)
app.get('/users', async (req, res) => {
    try {
        const users = await readUsersFromFile();
        res.send(users);
    } catch (err) {
        console.error('Error getting users:', err);
        res.status(500).send('Error getting users');
    }
});

// Route: Get user by ID (for demonstration purposes only)
app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const users = await readUsersFromFile();
        const user = users.find(user => user.id === userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
    } catch (err) {
        console.error('Error getting user:', err);
        res.status(500).send('Error getting user');
    }
});

// Route: Update user by ID (for demonstration purposes only)
app.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, lastName, email, username } = req.body;

    try {
        let users = await readUsersFromFile();
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }

        // Update user data
        users[userIndex] = { ...users[userIndex], name, lastName, email, username };
        await writeUsersToFile(users);

        res.send('User updated successfully');
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Error updating user');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
