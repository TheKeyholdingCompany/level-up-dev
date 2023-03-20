// What are conditionals in JavaScript?

/*
 * Conditionals are used to control the flow of a program.
 * They are used in if statements and switch statements.
 * If statements are used to execute code if a condition is true.
 * If statements can be chained together using else if.
 * If statements can be used with else.
 * Switch statements are used to execute code based on a condition.
 *
 */

// what is an if statement?
// if statements are used to execute code if a condition is true

const number = 5;

if (number === 5) {
  console.log("Number is 5");
}

// what is an else if statement?
// else if statements are used to execute code if a condition is true
if (number === 5) {
  console.log("Number is 5");
} else if (number === 6) {
  console.log("Number is 6");
}

// what is an else statement?
// else statements are used to execute code if a condition is false
if (number === 5) {
  console.log("Number is 5");
} else if (number === 6) {
  console.log("Number is 6");
} else {
  console.log("Number is not 5 or 6");
}

// what is a switch statement?
// switch statements are used to execute code based on a condition
switch (number) {
  case 5:
    console.log("Number is 5");
    break;
  case 6:
    console.log("Number is 6");
    break;
  default:
    console.log("Number is not 5 or 6");
    break;
}

// what is a ternary operator?
// ternary operators are used to execute code based on a condition
const result = number === 5 ? "Number is 5" : "Number is not 5";

// Results
console.log(result); // Number is 5

// what is a logical operator?
// logical operators are used to combine conditions
if (number === 5 && number === 6) {
  console.log("Number is 5 and 6");
} else if (number === 5 || number === 6) {
  console.log("Number is 5 or 6");
} else {
  console.log("Number is not 5 or 6");
}

// what is a truthy value?
// truthy values are values that are considered true when evaluated in a boolean context
const truthy = 5;

if (truthy) {
  console.log("Truthy");
}

// what is a falsy value?
// falsy values are values that are considered false when evaluated in a boolean context
const falsy = 0;

if (falsy) {
  console.log("Falsy");
}

// what is a short circuit?
// short circuits are used to prevent unnecessary code from being executed (also called guard clauses)
if (number === 5 && number === 6) {
  return;
}
