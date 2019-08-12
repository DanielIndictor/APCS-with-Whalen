# Arrays

Arrays are used when you have some, usually unspecified, amount of objects or data that you want to keep together and be able to use as a group. See the following tutorials:
- [Mozilla Developer Portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [w3Schools](https://www.w3schools.com/js/js_arrays.asp)
- [javascript.info](https://javascript.info/array)

## Quick Reference

Below we'll make an array and print out its length and first and third elements.

```javascript
let ages = [16, 17, 19, 15, 14, 23, 69, 420];  // Make the array.

console.log(ages.length); // ages.length is a variable that tells us
                          // how many items are in the array.

console.log(ages[0]); // Prints the first item in the array (16).
                      // Remember that we begin counting at 0.

console.log(ages[2]); // This is the _third_ element.
// The first is [0], the second [1] and so the third must be [2].

```

### Array Mutation
Mutation is just a fancy word for "change".
Below we'll show some examples of how to add and remove elements in an array.

```javascript
let students = ["Raphael", "Khizar", "Ilsa", "Thami", "B. Jiang"];

// Say we have a new student who we want to add to the above array.
// For this we use the .push method, which appends an object to the end of an
// array:

console.log(students); // Print array before appending to it.

students.push("Andrew");

console.log(students);

// Congratulations! You've mutated your first array.
// Now let's try removing the last element with the .pop method:
let removedElement = students.pop();

// Interestingly, when you remove the last element from an array with .pop it
// will also return the element that gets removed:
console.log(removedElement);
```

Similarly, you can use `shift` and `unshift` to remove and add items from and to the beginning of the array, respectively. See [this tutorial](https://alligator.io/js/push-pop-shift-unshift-array-methods/) for practical examples.

You can remove specific elements whose index you know in advance with the `splice` method as shown [here](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript#5767357):
```javacript
// Adapted from above link:
var array = [2, 5, 9, 9001];

array.splice(2,   // Removes the element at index 2 (9).
             1);  // Removes 1 elements, as specified by the second argument.

console.log(array);

```
## More
This tutorial is continued in this folder's `main.js` file.
