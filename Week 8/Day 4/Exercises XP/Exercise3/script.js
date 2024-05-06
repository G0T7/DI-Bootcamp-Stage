const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(combinedString);

//a long time ago in a galaxy far far away//