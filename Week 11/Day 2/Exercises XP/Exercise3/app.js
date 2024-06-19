// app.js
const { readFile, writeFile } = require("./fileManager.js");

// Read the content of "Hello World.txt" file and write to "Bye World.txt"
readFile("Hello World.txt")
  .then((content) => {
    console.log("Content read from 'Hello World.txt':", content);
    return writeFile("Bye World.txt", "Writing to the file");
  })
  .then((message) => {
    console.log(message);
    console.log("Content written to 'Bye World.txt'");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
