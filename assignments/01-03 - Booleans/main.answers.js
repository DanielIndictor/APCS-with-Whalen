//
// Booleans
//

// Below we'll take a look at some examples.
// Read the README.md in this folder first.

let a = true;
let b = false;
// See if you can predict what this will print out to.
console.log("when a is " + a " and b is " + b +
            ", a || b (or) evaluates to " + a || b);
// Side note: whsden a line gets long like the above one, it's usually a good idea
// to split it up across multiple lines.

// The console.log line will print that a || b is true
// because "a" by itself is true.

a = false;
b = true;
// See if you can predict what this will print out to.
console.log("when a is " + a " and b is " + b +
            ", a != b (not equal to) evaluates to " + a || b);
// Since a and b are not the same values the line will print false.

//
// Expressions that evaluate to booleans
//

// Remember that you don't have to use the variable names "a" and "b".
// Consider the following:
let driverHasPermit: = true;
let driverHasLicense = false;
console.log("It is " + (driverHasPermit || driverHasLicense) + " that the driver is allowed on the streets of New York State.");
// Notice the parenthesis around "driverHasPermit || driverHasLicense".
// They make sure that the program first figures out if the driver is allowed
// on the streets of New York


// Now let's take a look at operator precedence.
// See if you can predict the output of the following two lines:
console.log(2 + 5 * 3);
// Prints 17 because it finds 5*3 first and then adds 2.
console.log((2 + 5) * 3);
// Prints 21 because it first adds 2 to 5 and then multiplies by 3.

