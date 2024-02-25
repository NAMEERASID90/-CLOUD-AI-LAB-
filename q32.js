// List of current users
var current_users = ["john", "alice", "bob", "emma", "alex"];
// List of new users
var new_users = ["emily", "Alex", "mike", "bob", "sarah"];
// Convert all current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through new users to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Check if the lowercase version of the new username exists in the current users list
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
