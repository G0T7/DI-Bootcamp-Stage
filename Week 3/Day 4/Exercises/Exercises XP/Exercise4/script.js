const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Check the number of users online and display appropriate message
if (users.length === 0) {
    console.log("no one is online");
} else if (users.length === 1) {
    console.log(users[0] + " is online");
} else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else {
    let additionalUsersCount = users.length - 2;
    console.log(users[0] + ", " + users[1] + " and " + additionalUsersCount + " more are online");
}
