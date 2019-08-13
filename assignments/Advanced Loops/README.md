# Advanced Loops


## Simpler loops! (`for in` and `for of`)

### `for in`

Javascript provides syntax for common actions. Say you want to print the properties of an object. For this you would use a `for ... in` loop. The syntax for this is as follows:

```javascript
const myObject = {color: "red", age: 2000, firstName: "Santa", lastName: "Claus"}
for (property in myObject)
{
  console.log("myObject has property \"" +
              property + "\" with value " + myObject[property]);
}
```

The output will be:

```
myObject has property "color" with value red
myObject has property "age" with value 2000
myObject has property "firstName" with value Santa
myObject has property "lastName" with value Claus
```
Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).


### `for of`

`for of` loops are used to iterate over an _iterable_, like an array:

```javascript
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

for (let prime of primes)
{
  console.log("My favorite prime is " + prime);
}

```

See [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) for more examples.


## Control flow with `continue` and `break`

Continue and break allow you to exit loops or iteration of loops before
- [w3schools](https://www.w3schools.com/js/js_break.asp)
- [Article by Brandom Morelli](https://codeburst.io/javascript-continue-vs-break-47b5c15cacc6)
- [MDN on break statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [MDN on continue statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

Below I'll give an example.
Say we have a list of words that we want to print but we want to skip the ones with an even amount of digits (using `continue`) and if we encounter a word with 11 digits we want to stop entirely. The code for that would look like this:

```javascript

const words = [
  "I",
  "yearn",
  "for",
  "coding",
  "club",
  "is",
  "cool",
  "without",
  "distractions",
  "spondulicks",
  "four",
  "ardency",
  "nisus",
  "fulgurant"];

for(word of words)
{
  if ((word.length % 2) == 0)
  {
    continue;
  }
  if (word.length == 11)
  {
    break;
  }
  console.log(word);
}

```

Doesn't it make much more sense now? Maybe not but the example hopefully got the idea across: use `continue` to skip an iteration and `break` to exit out of the inner loop entirely.

## More
This tutorial is continued in this folder's `main.js` file.
