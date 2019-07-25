//
// Addition with variables.
//

// Now we're gonna learn how to use variables to store information.
// We're gonna put our age in the next variable.
let age = 15;

// We can print this information to the console like so:
console.log("Your age is");
console.log(age);
// Notice how the term "age" is not in quotes in the above line.
// This is because it is a variable name while only text information is enclosed in quotes.

// You can do simple math in Javascript with the following
// operators: "+", "-", "*" (multiplication), and "/" (division)

// Now we're gonna make a variable whose value is
// 7 more than twice that of "age".
let myVariable = (age * 2) + 7;
// Notice how we put the multiplication in parenthesis to make it clear that we want the multiplication executed first. Now myVariable is set to 37.

// We can move around the parenthesis like in math to change the value of the
// variable.
let anotherVariable = age * (2 + 7);
// Now anotherVariable is equal to 135 (15 * 9).

// Below print the sum of the two variables we just made.
// YOUR CODE HERE

//
// Strings
//

// Strings are data that hold text information like a name.
// They are marked with quotations as below:

let name = "Michael";

// It can be printed like any other variable:
console.log(name);

// Strings can be combined to form longers strings with the "+" operator:
let greeting = "Hello! My name is " + name + "! It's good to meet you.";

// We'll print the greeting to see the result:
console.log(greeting);
// Notice how every part of the greeting is printed on the same line.

// We don't need to save every step to a variable.
// You can combine strings within your print statement like so:
console.log("This is just another way to print " + name);

// Below save the name and size (in meters) of your favorite animal and then print them with a single console.log statement.
// YOUR CODE HERE

//
// Variable Mutation
//

// You can change a variable once it has been set.
myVariable = 42;
// Notice that we don't need to write "let" when reassigning variables.

// Below assign new values to all of the variables we've made so
// far in this document and then print the new values all with a single
// console.log line.
// YOUR CODE HERE


// You can also use a variable's previous value to set a new one.
// Consider the following:
myVariable = 2;
myVariable = myVariable + 83;
// In math it wouldn't make sense to write "x = x + 83"
// but here it's perfectly valid.
// The right side of the line (right of the equals sign) is evaluated first.
// Then the result of that is saved back to myVariable.

// Below set "anotherVariable" to your favorite number and then square it by assigning it to a multiple of itself.
// YOUR CODE HERE
