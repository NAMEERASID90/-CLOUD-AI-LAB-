var personName = "John Doe";
// Lowercase
console.log("Lowercase:", personName.toLowerCase());
// Uppercase
console.log("Uppercase:", personName.toUpperCase());
// Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
