function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the make_great function to modify the magician names
var great_magicians = make_great(magician_names);
// Printing the modified list of magicians
show_magicians(great_magicians);
