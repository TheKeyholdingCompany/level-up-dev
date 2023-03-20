// What are objects in JavaScript?

/*
 * Objects are used to represent data in JavaScript.
 * They are used in object operations and can be assigned to variables.
 * Objects are mutable and can be changed.
 * Objects are surrounded by curly braces.
 * Objects can be accessed using bracket notation.
 * Objects have a keys() method.
 * Objects have a values() method.
 * Objects have a entries() method.
 * Objects have a length property.
 * Objects have a hasOwnProperty() method.
 * Objects have the in operator.
 */

const object = {
  companyName: "TKC",
  age: 25,
  location: "London",
};

// Objects can be accessed using bracket notation

const companyName = object.companyName;
const age = object["age"];

// Results
console.log(companyName); // TKC
console.log(age); // 25

// Objects can use the keys() method
const keys = Object.keys(object);

// Results
console.log(keys); // ["companyName", "age", "location"]

// Objects can use the values() method
const values = Object.values(object);

// Results
console.log(values); // ["TKC", 25, "London"]

// Objects can use the entries() method
const entries = Object.entries(object);

// Results
console.log(entries); // [["companyName", "TKC"], ["age", 25], ["location", "London"]]

// Objects can use the length property
const length = Object.keys(object).length;

// Results
console.log(length); // 3

// Objects can use the hasOwnProperty() method
const hasOwnProperty = object.hasOwnProperty("companyName");

// Results
console.log(hasOwnProperty); // true

// Objects can use the in operator
if ("companyName" in object) {
  console.log("companyName exists");
}

// Results
console.log("companyName exists"); // companyName exists

// Objects can be mutated
object.age = 26;

// Results
console.log(object); // {companyName: "TKC", age: 26, location: "London"}

// Objects can be deleted
delete object.age;

// Results
console.log(object); // {companyName: "TKC", location: "London"}

// Objects can be added
object.totalEmployees = 25;

// Results
console.log(object); // {companyName: "TKC", location: "London", totalEmployees: 25}

// Objects can be assigned to variables
const object2 = object;

// Results
console.log(object2); // {companyName: "TKC", location: "London", totalEmployees: 25}

// Objects can be copied
// This is a shallow copy
const object3 = { ...object };

// Results
console.log(object3); // {companyName: "TKC", location: "London", totalEmployees: 25}
