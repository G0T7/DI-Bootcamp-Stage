// read-directory.js
const fs = require('fs');

// Read the list of files in the specified directory
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});
