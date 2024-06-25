const faker = require('faker');

let users = [];

function addUser() {
    const user = {
        name: faker.name.findName(),
        address: {
            street: faker.address.streetAddress(),
            country: faker.address.country()
        }
    };
    users.push(user);
}

module.exports = {
    users,
    addUser
};
