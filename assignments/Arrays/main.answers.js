//
// Arrays
//

// Challenge 1: Create and print an array holding all the numbers from 0 to 100, inclusive.

let array = [];
for(let i = 0; i <= 100; i = i + 1) {
  array.push(i);
}

// Challenge 2: Print all the numbers from the above array in reverse order.

// Notice how we're iterating backwards through the array this time.
// We initialize i to one minus the length because that is
// the index of the last element.
for(let i = array.length - 1; i >= 0; i = i - 1) {
  console.log(array[i]);
}

// Challenge 3: Remove the 80th element from the array.
// ** Remember that arrays start counting at 0.

array.slice(79, 1);

