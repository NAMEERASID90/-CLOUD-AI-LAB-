var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Create a copy of the array of magician names
var magician_names_copy = __spreadArray([], magician_names, true);
// Calling the make_great function with the copy of the array
var great_magicians = make_great(magician_names_copy);
// Printing the original list of magicians
console.log("Original Magicians:");
show_magicians(magician_names);
// Printing the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
