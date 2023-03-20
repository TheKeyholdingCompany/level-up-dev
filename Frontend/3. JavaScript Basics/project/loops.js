// What are loops in JavaScript?

/*
 * Loops are used to repeat code in JavaScript.
 * They are used in for loops, while loops, and do while loops.
 * For loops are used to repeat code a specific number of times.
 * For loops can be used with break and continue.
 * While loops are used to repeat code while a condition is true.
 * While loops can be used with break and continue.
 * Do while loops are used to repeat code while a condition is true.
 * Do while loops can be used with break and continue.
 */

// what is a for loop?
// for loops are used to repeat code a specific number of times

for (let index = 0; index < 5; index++) {
  console.log(index);
}

// what is a while loop?
// while loops are used to repeat code while a condition is true

let index1 = 0;
while (index1 < 5) {
  console.log(index1);
  index1++;
}

// what is a do while loop?
// do while loops are used to repeat code while a condition is true

let index2 = 0;
do {
  console.log(index2);
  index2++;
} while (index2 < 5);

// what is a break statement?
// break statements are used to exit a loop

for (let index = 0; index < 5; index++) {
  if (index === 3) {
    break;
  }
  console.log(index);
}

// what is a continue statement?
// continue statements are used to skip the current iteration of a loop

for (let index = 0; index < 5; index++) {
  if (index === 3) {
    continue;
  }
  console.log(index);
}

// Results
// 0, 1, 2, 4
