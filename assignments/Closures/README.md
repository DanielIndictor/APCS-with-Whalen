# Closures

Please check with your instructor before jumping in here---closures can be terrifying if you're not solid with foundational concepts like functions and objects and scopes.

Closures are a concept that is very popular in Javascript and can make for some very elegant code. Essentially, they're functions that hold on to their own data even after the object or function that generated them has passed out of scope. Please consult the following tutorials as the book doesw not offer proper guidance on the subject:

- [See this tutorial](https://www.w3schools.com/js/js_function_closures.asp)
- [And this one](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Perhaps the greatest StackOverflow post I have ever seen here](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
- [Real world examples](https://code-examples.net/en/q/29a156) --- I revisit some of these in `main.js`.


## Synopsis

See if you can spot the error in the next snippet of code:

```Javascript
function greet() {
  let firstName = "Winny"
  console.log("Hello! My name is " + firstName);
}

let lastName = "Chen";
greet();
console.log("My full name is " + firstName + " " + lastName);
```

If you guessed that you can't access `firstName` from the last line since it was defined in the `greet` function, you'd be absolutely right---that's how scopes work, after all. A function nested within another function can however access its enclosing function's members:

```Javascript
function greet() {
  let firstName = "Raphael"
  let lastName = "Mergenstraum";
  let greeting = "My full name is " + firstName + " " + lastName;

  function printGreeting() {
    console.log(greeting);
  };

  printGreeting();
}

greet();
```

This is fine but what if we were interested in greeting the user multiple times without defining `firstName`, `lastName`, and `greeting` every time? The redefinition may be undesirable when the variables are calculated by a slow function that takes a while to complete over and over again. We can solve this problem by returning a copy of our inner function:

```Javascript
function getGreeter() {
  let firstName = "Raphael"
  let lastName = "Mergenstraum";
  let greeting = "My full name is " + firstName + " " + lastName;

  function printGreeting() {
    console.log(greeting);
  };

  // Notice that below we're not putting parenthesis after the function name.
  // This way we're passing the function itself, not the result of running it.
  return printGreeting;
}

let greeter = getGreeter();
// Now "greeter" is a function that will greet the user.
// At this point nothing has actualy been printed to the console.

// Here we'll greet ourselves a couple of times:
greeter();
greeter();
greeter();
```

An incredible thing has just happened here: `greeter` was able to access the variable `greeting` _after_ the  `getGreeter` function finished. This ability to access variables that have gone out of scope is a common pattern that you will encounter often as you use more advanced Javascript features.

## More
A good practical example of the use of clojures can be demonstrated by a simple counting button on a webpage. See `index.html` before moving onto `main.js`
