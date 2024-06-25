// 1st Daily Challenge

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject('Error: All elements in the array must be strings.');
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort();
        resolve(sorted);
      } else {
        reject('Error: Array length must be greater than 4.');
      }
    });
  }
  
  // Test cases
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  // 2nd Daily Challenge
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject('Error: Morse object is empty.');
      } else {
        resolve(morseObj);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or a sentence:');
      const morseTranslation = [];
      for (let char of userInput) {
        if (!(char.toLowerCase() in morseJS)) {
          reject(`Error: Character "${char}" does not exist in the Morse object.`);
          return;
        }
        morseTranslation.push(morseJS[char.toLowerCase()]);
      }
      resolve(morseTranslation);
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n');
    document.getElementById('output').innerText = morseString;
  }
  
  // Usage
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.error(error));
  