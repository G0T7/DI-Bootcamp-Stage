//Using a for loop:
const letters = ['x', 'y', 'z', 'z'];
const result = {};

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (result[letter]) {
        result[letter]++;
    } else {
        result[letter] = 1;
    }
}

console.log(result); // Output: { x: 1, y: 1, z: 2 }

//Using the reduce() method:
const letters = ['x', 'y', 'z', 'z'];
const result = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});

console.log(result); // Output: { x: 1, y: 1, z: 2 }
