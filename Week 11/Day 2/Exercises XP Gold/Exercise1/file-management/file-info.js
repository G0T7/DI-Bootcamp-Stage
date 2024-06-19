const path = require('path');
const fs = require('fs');

// Create a file path to the example.txt file
const filePath = path.join(__dirname, 'data', 'example.txt');

// Check if the file exists
const fileExists = fs.existsSync(filePath);
console.log(`File exists: ${fileExists}`);

if (fileExists) {
    // Get information about the file
    const fileStats = fs.statSync(filePath);
    console.log(`File Size: ${fileStats.size} bytes`);
    console.log(`File Created: ${fileStats.birthtime}`);
}
