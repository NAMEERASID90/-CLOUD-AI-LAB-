var guestList = ["Galileo Galilei", "Albert Einstein", "Nikola Tesla", "Isaac Newton", "Marie Curie", "Charles Darwin"];
// Print statement informing about the limited space
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the two remaining guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou're still invited to dinner."));
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the final list to ensure it's empty
console.log("Final guest list:", guestList);
