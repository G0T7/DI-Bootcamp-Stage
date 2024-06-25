const { users, addUser } = require('./generate-users');
const inquirer = require('inquirer');

async function main() {
    // Add 5 fake users
    for (let i = 0; i < 5; i++) {
        addUser();
    }

    console.log('Generated users with Faker:');
    console.log(users);

    // Prompt the user for their details
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        },
        {
            type: 'input',
            name: 'street',
            message: "What's your street address?"
        },
        {
            type: 'input',
            name: 'country',
            message: "What's your country?"
        }
    ]);

    // Add the user's details to the users array
    users.push({
        name: answers.name,
        address: {
            street: answers.street,
            country: answers.country
        }
    });

    console.log('Updated users array:');
    console.log(users);
}

main();
