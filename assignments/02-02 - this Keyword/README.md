# The `this` keyword.

If you're familiar with the `this` and `self` keywords in other object oriented languages, this should come easy to you --- only the syntax is a little strange. Below are some tutorials on the `this` keyword in Javascript and a quick syntax reference is provided:

- See `this` keyword on page 156 of the Javascript Grammar Guide (13.2).
- [See this tutorial](https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript)
- [And this one](https://www.javascripttutorial.net/javascript-this/) --- This tutorial beautifully demonstrates potential pitfalls with the use of the `this` keyword.

## `this` Syntax
```JavaScript
// Below we'll make a human object that can print a greeting to the console.
human = {name: "Edward",
         age: 17,
         greet: function() {console.log("My name is " +
                                        this.name +
                                        " and I am " +
                                        this.age +
                                        " years old!");
         }

```
As you should recognize, `name` and `age` are attributes of the human. What's interesting about the above line is how the function accesses those attributes. After copying the above, execute the next line in a terminal:

```Javascript
human.greet();

```

Notice how the `greet` function knows exactly which object it's attached to. This is a consequence of the `this` keyword which automatically attaches itself to the object it is run in. Consider the following, more complex example:

```Javascript
human = {name: "Sarah",
         age: 17,
         greet: function() {console.log("My name is " +
                                        this.name +
                                        " and I am " +
                                        this.age +
                                        " years old!");
         }
also_human = {name: "Veda",
              age: 18,
              greet: function() {console.log("My name is " +
                                             this.name +
                                             " and I am " +
                                             this.age +
                                             " years old!");
              }

human.greet();
also_human.greet();
```

Notice how even though both functions are printing `this.name` and `this.age`, the actual values that get printed to console are different. The `this` variable is automatically set to `human` when `human.greet` is called and then set to `also_human` when `also_human` is called.

Note that the `this` keyword will be updated for classes (covered later) as well.

## More
This tutorial is continued in this folder's `main.js` file.
