var guestList = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
// Print statement informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Galileo Galilei");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");
// Add one new guest to the end of the array
guestList.push("Charles Darwin");
// Printing invitation messages to each person
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nI would like to invite you to dinner. It would be an honor to have you join us."));
}
