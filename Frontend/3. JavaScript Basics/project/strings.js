// What are strings in JavaScript?

/*
 * Strings are used to represent text in JavaScript.
 * They are used in string operations and can be assigned to variables.
 * Strings are surrounded by single or double quotes.
 * Strings can be concatenated using the + operator.
 * Strings can be accessed using bracket notation.
 * Strings have a length property.
 * Strings have a toUpperCase() method.
 * Strings have a toLowerCase() method.
 * Strings have a trim() method.
 * Strings have a replace() method.
 * Strings have a slice() method.
 * Strings have a split() method.
 */

const string = "Hello TKC!";

// Strings can be concatenated using the + operator
const greeting = "Hello" + " " + "TKC!";

const hello = "Hello";
const TKC = "TKC!";
const greetingLiteral = `${hello} ${TKC}!`;

// Results
console.log(greeting); // Hello TKC!
console.log(greetingLiteral); // Hello TKC!

// Strings can use the length property
const length = string.length;

// Results
console.log(length); // 9

// Strings can use the toUpperCase() method
const upperCase = string.toUpperCase();

// Results
console.log(upperCase); // HELLO TKC!

// Strings can use the toLowerCase() method
const lowerCase = string.toLowerCase();

// Results
console.log(lowerCase); // hello tkc!

// Strings can use the trim() method
const trimmed = " Hello TKC! ".trim();

// Results
console.log(trimmed); // Hello TKC!

// Strings can use the replace() method
const replaced = string.replace("TKC", "World");

// Results
console.log(replaced); // Hello World!

// Strings can use the slice() method
const slice = string.slice(0, 5);

// Results
console.log(slice); // Hello

// Strings can use the split() method
const split = string.split(" ");

// Results
console.log(split); // ["Hello", "TKC!"]
