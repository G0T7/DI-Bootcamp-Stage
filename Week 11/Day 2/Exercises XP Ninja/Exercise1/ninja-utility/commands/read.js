// commands/read.js

const fs = require('fs');

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err.message);
            return;
        }
        console.log('File content:');
        console.log(data);
    });
}

module.exports = readFile;
