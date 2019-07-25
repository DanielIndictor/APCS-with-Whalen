//
// if Statements
//

// In New York there are many milestone ages that you must reach to have access
// to various services. Below as an example exercise we're gonna write
// a program that tells you about some of the opportunities available to
// a person at a given age.

let age = 5;
console.log("You are " + age + " years old. This is what you can do:");

// To be eligible for military service you must be at least 17.
// If you're exactly 17 you need a parent's permission. We'll express this
// with the sequence of if statements below:
if (age == 17)
{
  console.log("You can join the military with a parent's permission.");
} else
{
  if (age > 17)
  {
  console.log("You're old enough to join the military if you so decide.");
  }
}

// Below print on the console similar messages suitable to the type of milestone
// listed:

// parent's health insurance
if (age <= 26)
{
  console.log("You can be covered by your parent's health insurance " +
              "until December 31 of the year you turn 26.");
} else
{
  console.log("You cannot be covered by your parent's health insurance.");
}

// Drinking age
if (age < 21)
{
  console.log("Don't drink alcohol. Maybe try root beer?");
} else
{
  console.log("Screw root beer! Drink responsibly though.");
}

// Voting age
if (age < 18)
{
  console.log("You can't vote yet. You can still do your " +
              "part by keeping up to date with politics.");
} else
{
  console.log("Screw root beer! Drink responsibly though.");
}

// Minimum age to have a Google account.
if (age < 13)
{
  console.log("You can't have a Google account!");
} else
{
  console.log("Feel free to sign up for a Google account!");
}
