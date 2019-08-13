//
// Arrays
//

// Challenge 1: Create and print an array holding all the numbers from 0 to 7, inclusive.

// Solution 1
// let array = [0, 1, 2, 3, 4, 5, 6, 7];

// Solution 2 (loops)
let array = [];
for(let i = 0; i <= 7; i = i + 1) {
  array.push(i);
}

// Challenge 2: Print all the numbers from the above array in reverse order.

// Solution 1
// console.log(array[7], array[6], array[5], array[4],
//             array[3], array[2], array[1], array[0]);

// Solution 2 (Loops)

// Notice how we're iterating backwards through the array this time.
// We initialize i to one minus the length because that is
// the index of the last element.
for(let i = array.length - 1; i >= 0; i = i - 1) {
  console.log(array[i]);
}

// Challenge 3: Remove the 5th element from the array.
// ** Remember that arrays start counting at 0.

array.slice(4, 1);

