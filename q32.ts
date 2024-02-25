// List of current users
let current_users: string[] = ["john", "alice", "bob", "emma", "alex"];

// List of new users
let new_users: string[] = ["emily", "Alex", "mike", "bob", "sarah"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Loop through new users to check for uniqueness
for (let new_user of new_users) {
    // Check if the lowercase version of the new username exists in the current users list
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
