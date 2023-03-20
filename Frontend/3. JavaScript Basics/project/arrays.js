// What are arrays in JavaScript?

/*
 * Arrays are used to represent lists in JavaScript.
 * They are used in array operations and can be assigned to variables.
 * Arrays are surrounded by square brackets.
 * Arrays can be accessed using bracket notation.
 * Arrays have a length property.
 * Arrays have a push() method.
 * Arrays have a indexOf() method.
 * Arrays have a includes() method.
 * Arrays have a find() method.
 * Arrays have a sort() method.
 * Arrays have a forEach() method.
 * Arrays have a map() method.
 * Arrays have a filter() method.
 * Arrays have a reduce() method.
 */

const array = ["Hello", "TKC", "!"];

// Arrays can be accessed using bracket notation

const first = array[0];
const second = array[1];
const third = array[2];

// Results
console.log(first); // Hello
console.log(second); // TKC
console.log(third); // !

// Arrays can use the length property
const length = array.length;

// Results
console.log(length); // 3

// Arrays can use the push() method
array.push("Hello");
array.push("TKC");
array.push("!");

// Results
console.log(array); // ["Hello", "TKC", "!", "Hello", "TKC", "!"]

// Arrays can use the indexOf() method
const index = array.indexOf("TKC");

// Results
console.log(index); // 1

// Arrays can use the includes() method
const includes = array.includes("TKC");

// Results
console.log(includes); // true

// Arrays can use the find() method
const find = array.find((item) => item === "TKC");

// Results
console.log(find); // TKC

// Arrays can use the sort() method
const sorted = array.sort();

// Results
console.log(sorted); // ["!", "!", "Hello", "Hello", "TKC", "TKC"]

// Arrays can use the forEach() method
array.forEach((item) => console.log(item));

// Results
// !
// !
// Hello
// Hello
// TKC
// TKC

// Arrays can use the map() method
const mapped = array.map((item) => item.toUpperCase());

// Results
console.log(mapped); // ["!", "!", "HELLO", "HELLO", "TKC", "TKC"]

// Arrays can use the filter() method
const filtered = array.filter((item) => item === "TKC");

// Results
console.log(filtered); // ["TKC", "TKC"]

// Arrays can use the reduce() method
const reduced = array.reduce((accumulator, item) => {
  return accumulator + item;
});

// Results
console.log(reduced); // !!HelloHelloTKCTKC
