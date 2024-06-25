const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. Using the map() method to create a new array with welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using the filter() method to create a new array containing only Full Stack Residents
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// 3. Bonus: Chaining filter() method with map() method to return an array containing only the last names of Full Stack Residents
const lastNamesOfFullStackResidents = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(lastNamesOfFullStackResidents);
