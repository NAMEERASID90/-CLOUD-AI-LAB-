// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lower case function
var mixedCaseString = "HelloWorld";
var lowerCaseString = mixedCaseString.toLowerCase();
console.log(lowerCaseString === "helloworld"); // True
console.log(lowerCaseString !== "helloworld"); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
var x = 10;
var y = 5;
var z = 15;
console.log((x > y) && (x < z)); // True
console.log((x > y) || (x < z)); // True
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
var item = 3;
console.log(array.includes(item)); // True
// Test whether an item is not in an array
console.log(!array.includes(4)); // True
