const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Convert object to array
const usersArray = Object.entries(users);

// Part 2: Modify ID values by multiplying by 2
const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);

// Output the results
console.log(modifiedUsersArray);
