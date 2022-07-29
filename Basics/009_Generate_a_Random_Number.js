// Example 1: Generate a Random Number

// generating  a random number
const a = Math.random();
console.log(a);

// Output
// 0.5856407221615856
// Here, we have declared a variable a and assigned it a random number greater than or equal to 0 and less than 1.

// Example 2: Get a Random Number between 1 and 10
// We can use this value in the range (0,1) to find the random value between any two numbers using formula:
// Math.random() * (highestNumber - lowestNumber) + lowestNumber

// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

// Output
// Random value between 1 and 10 is 7.392579122270686
// This will show a random floating-point number greater than 1 and less than 10.

// Example 3: Integer Value between 1 and 10

// generating a random number
const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);

// Output
// Random value between 1 and 10 is 2
// This will show integer output between 1 (inclusive) to 10 (exclusive), i.e. (1 to 9). Here, Math.floor() is used to convert decimal to integer value.
