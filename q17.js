var guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Printing the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));
// Printing invitation messages to each person
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nI would like to invite you to dinner. It would be an honor to have you join us."));
}
