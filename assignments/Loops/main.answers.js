//
// Loops
//

// Challenge 1: fooboo!
// My favorite game to play with my friends is called fooboo.
// The rules are simple: each player takes turns saying the next-highest
// number, with a catch: if the number is divisible by 3, they must call
// out "foo" instead of the number. If it is divisible by 5 they must call out
// "boo".  If it is divisible by both 3 and 5, then they must call out "fooboo".

// For example, a normal sequence goes as follows:
// 1 2 foo 4 boo foo 7 8 foo boo 11 foo 13 14 fooboo

// Your assignment is as follows: Using the first 15 values above as a model,
// write a for loop to print the first 100 values of this sequence
// (starting at 1).

for(let i = 1; i <= 100; ++i) {
  if (i % 15 == 0) {
    console.log("fooboo");
  }
  else if (i % 3 == 0) {
    console.log("foo");
  }
  else if (i % 5 == 0) {
    console.log("boo");
  }
  else {
    console.log(i);
  }
}

// Challenge 2: Summation

// Using a single loop and a single outside variable,
// find and print the sum of all of the integers from 1 to 100.

let runningSum = 0;
for(let i = 0; i <= 100; ++i)
{
  runningSum += i;
}
console.log(runningSum);

// Challenge 3: The Collatz Conjecture

// There exists a conjecture in mathematics called the Collatz Conjecture.
// It posits that if you take any positive integer, multiply by 3 and add 1
// if it's odd and otherwise divide by 2 if it's even, and repeat the process,
// eventually it will reach "1". Take 6 for example:
// 6 is even, so we divide by 2 to get 3.
// 3 is odd, so we multiply by 3 and add one to get 10.
// 10 is even, so we divide by 2 to get 5.
// 5 is odd, so we multiply by 3 and add 1 to get 16.
// 16 is even, so we divide by 2 to get 8.
// divide again to get 4
// again to get 2
// finally divide by 2 to get 1.

// Your challenge is to print out the numbers in this sequence starting from
// 1337.

let x = 1337;
while (x != 1)
{
  console.log(x);
  if (x % 2 == 0)
  {
    x = x / 2;
  } else
  {
    x = x * 3 + 1;
  }
}
console.log(1); // Make sure we print the 1 since it'll exit the while loop
                // before printing 80.

// Challenge 4: Square patterns!
// Time to draw! You can solve this one with a for loop embedded in a for loop
// though there _are_ faster ways if you wish to find them.

// Basically, for any number print a "square" of #'s with that side length.
// For example, for the number 3 the square looks like
// ###
// ###
// ###
// And for 2 it looks like
// ##
// ##

// Your task is to write code that can do this for the number 32.

// Solution 1 (cleaner)
for (let i = 0; i < 32; ++i) {
  console.log("#".repeat(32));
}

// Solution 2: (obvious solution)
let line = "";
for (let j = 0; j < 32; ++j) {
  line += "#"
}

for (let i = 0; i < 32; ++i) {
  console.log(line);
}
