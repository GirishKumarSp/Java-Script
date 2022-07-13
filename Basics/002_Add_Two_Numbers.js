//1
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// Output

// The sum of 5 and 3 is: 8

//2
//Add Two Numbers Entered by the User
//prompt() is used to take inputs from the user. parseInt() is used to convert the user input string to number.

const prompt = require("prompt-sync")({ sigint: true}); //if u need to exicute inside console
// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Output

// Enter the first number 5
// Enter the second number 3
// The sum of 5 and 3 is: 8
