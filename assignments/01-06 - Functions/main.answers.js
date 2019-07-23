//
// Functions
//

// There are plenty of examples of how to write functions on the tutorials
// I mentioned so it's time for some practice of your own:

// Below, write a function that accepts a number as an argument and returns
// its cube root. Name the function "cubeRoot".
// Use the "**" operator for exponentiation (2**3 = 2 * 2 * 2 = 8).

let cubeRoot = (number) => {return number ** (1/3)};

console.log(cubeRoot(8));  // Should print "2" to console.

// Next, write a function named "greet" that takes an human-like object like
// the one below as its input and prints a greeting for the object to console.
// Make sure the greeting contains the object's name and age.

goodHuman = {name: "Allen", age: 15}

function greet(human) {
  console.log("Hello! My name is " + human.name +
              " and I am " + human.age + " years old.");
}
// Your code should be able to work with both human objects below
// since they both have a name and age.
badHuman = {name: "Adam", age: 9}

greet(badHuman);
greet(goodHuman);


// All good things come in threes, so you have one last function to write.
// It's a little more difficult but it will test your ability to use the
// concepts you have learned thus far.
// Below write a function to get the surface area of a cylinder
// of the specified radius and height (given as arguments in the order
// [radius, height].
// Name the function cylinderSurfaceArea.
// Use the variable Math.PI to get a precise value of pi.

function cylinderSurfaceArea(radius, height) {
  let circumferance = Math.PI * 2 * radius;
  return Math.PI * 2 * radius**2 + height * circumferance;
}

console.log(cylinderSurfaceArea(4, 8));  // 301.59...
console.log(cylinderSurfaceArea(9, 3));  // 678.58...

