//
// Closures
//

// See index.html before moving on here.

// As an example, let's start with a simple counter application.
// If you run this javascript file you'll see a button and some text on
// the webpage.  We want the counter on the text to update as the user
// clicks it. Let's select the button and textbox first:
let counterBox = document.getElementById("counterBox");  // textbox
let clicker = document.getElementById("clicker");  // button

// Now we will create a counter variable for use in our code:
let timesClicked = 0;

// Now we write the closure. Since we want the textbox to update when the
// button is clicked we will attach it to "clicker.onclick"
clicker.onclick = function() {
  timesClicked = timesClicked + 1;
  counterBox.innerText = timesClicked;
};

// Once again we using a "saved function" to make changes to variables outside their scope.

// This exercise is gonna be a little bit harder than the others
// but you'll understand clojures by the time you finish for sure.

let names = ["Khizar", "Cornelia", "Brendan", "Robert"];

// Your assignment is to change clicker.onclick so that it still increments the
// counterBox when it's pressed and also prints a different name every time by
// changing the text of the paragraph with id "exercise1".

// YOUR CODE HERE
