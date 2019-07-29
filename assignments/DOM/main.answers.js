//
// DOM
//

// First we'll select the header with text "Select me!".
let header = document.getElementById("bigHeader");

// Now we'll start playing with the color of the header.
// We can access the color as a property of the "style" object:
header.style.color = "Blue";
// A list of styles can be found here:
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
// and explained here:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

// Now write a line of code to change the
// background color of the header to your favorite color.
// Use the websites linked above for reference.
// The following link has the list of available colors
// like "Blue", "Orange", and "MediumPurple".
// https://www.w3schools.com/colors/colors_names.asp

header.style.backgroundColor = "Orange";

// We can also alter the text by changing the header's "innerText" attribute:
header.innerText = "This is the new header.";

// Next, select the paragraph using the technique demonstrated above and
// change both a style element not used thus far
// (so you can't change the color or backgroundColor)
// and set the text to your favorite song lyric.
// See index.html for the ID of the paragraph.

paragraph = document.getElementById("bigParagraph");
paragraph.style.fontSize = "5em";
paragraph.innerText = "You're face to face with the man who sold the world.";

