var names = ["Alice", "Bob", "Charlie", "David"];
var greetingMessage = "Hello, ";
// Printing a personalized message to each person
for (var i = 0; i < names.length; i++) {
    console.log("".concat(greetingMessage).concat(names[i], "!"));
}
