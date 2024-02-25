let numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: accessing an index that is out of bounds
console.log(numbers[10]); // This will produce an array index error

// Correcting the error
console.log("Accessing the last element:", numbers[numbers.length - 1]); // Accessing the last element safely
