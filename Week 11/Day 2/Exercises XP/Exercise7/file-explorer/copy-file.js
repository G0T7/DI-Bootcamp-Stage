// copy-file.js
const fs = require('fs');

// Read the content from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Write the same content to destination.txt
  fs.writeFile('destination.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File copied successfully!');
  });
});
