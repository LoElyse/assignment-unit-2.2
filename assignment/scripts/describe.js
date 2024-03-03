// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set the value to 'Dane'.
// if the value of name is equal to Mary, if this is true then 
//we console.log 'Hi, Mary' if this is false console.log 'How do you do?'.

// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create  a variable called secret.
// create another variable called code and set the value to 123.
// if the value of code equals 123 is true then we set secret to 'super' and we set code to 
// code multiplied by 2.
// if the value of code is greater than 250 set secret to 'duper'.
// Then we console.log (secret).

// Question- what was the purpose of line 69 and 70 if there isnt a code that would make the value of code greater than 250?

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable called isStudent and assign true as it's value
// We declare second variable called age and assign 34 as its value.
// We declare a third variable called zip and assign 55407 as its value.
// if the value of isStudent is equal to true and zip being greater than 8000, the console.log ('You're a student on the west coast!').
// if the value of isStudent is equal to false or age is less than 30, then console.log ('What are your hobbies?').
// if the value of isStudent is equal to being true, then console.log ('Welcome to Prime!').
// Otherwise, console.log ('How about the weather?').


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


/*

// Fix- variable colorOne is set to 'red and colorTwo is set to 'blue' 
// when the intructions say to set colorOne to 'blue' and colorTwo to 'red'
// Should be let colorOne = 'blue' and let colorTwo = 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// Fix- only variable colorOne-- set to 'purple when the intructions say to have both colorOne and colorTwo to equal 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//Fix- conditional-- checking if either variable is true using ||, but the instructions asks to check if both are true using &&.
//Should be if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//Fix- conditional-- checking if minAge is greater or equal to age and to console.log ('no entry'), 
//but the instructions asked to check if age is greater or equal to minAge and console.log ('enter').
//Should be if (age >= minAge) { console.log ('enter'); }


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

