# Functions

Functions are so important that I'm not even going to explain them here. Please refer to the following resources for information on how functions work.

- [Mozilla Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [w3Schools](https://www.w3schools.com/js/js_functions.asp)
- [javascript.com](https://www.javascript.com/learn/functions)

## Syntax
I'll show 3 ways to make functions. The first is the most common and is prefered in almost all cases:

```Javascript
function fun(arg1, arg2)
{
  let x = arg1 * 12 + arg2 * 24;
  return x;
}
```

Above we made a function called `fun` that accepts two arguments. We can also save the function like a variable (though you should avoid this pattern where possible):

```Javascript
fun = function(arg1, arg2)
{
  let x = arg1 * 12 + arg2 * 24;
  return x;
}
```

The above syntax is used most often when a function is saved in an object (covered later).

Finally we have arrow syntax. This is very useful for very short functions
but should be used sparingly. It is most commonly used for higher order functions, or functions that take another function as an argument.

```Javascript
let fun = (arg1, arg2) => {return arg1 * 12 + arg2 * 24;};
```

## More
This tutorial is continued in this folder's `main.js` file.
