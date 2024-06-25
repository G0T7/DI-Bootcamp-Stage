const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let sumOfAges = 0;

for (const pet of data) {
    if (pet.type === 'dog') {
        sumOfAges += pet.age * 7;
    }
}

console.log('Sum of dogs\' ages in human years (using loop):', sumOfAges);


const sumOfAgesReduce = data.reduce((accumulator, currentValue) => {
  if (currentValue.type === 'dog') {
      return accumulator + (currentValue.age * 7);
  }
  return accumulator;
}, 0);

console.log('Sum of dogs\' ages in human years (using reduce):', sumOfAgesReduce);
