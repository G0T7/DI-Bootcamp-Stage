const fs = require('fs');
const path = require('path');

function readFileContent() {
  try {
    const filePath = path.join(__dirname, 'file-data.txt');
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

module.exports = readFileContent;
