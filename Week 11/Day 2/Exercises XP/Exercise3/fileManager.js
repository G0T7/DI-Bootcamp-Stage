// fileManager.js
const fs = require("fs");

// Function to read a file
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to write to a file
function writeFile(fileName, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File written successfully!");
      }
    });
  });
}

module.exports = {
  readFile,
  writeFile
};
