# Loops

Loops can be tricky so you better pay attention in class. They are one of the
- [Crash Course Computer Science](https://www.youtube.com/watch?v=l26oaHV7D40)
- [Mozilla Developer Portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [w3Schools](https://www.w3schools.com/js/js_loop_for.asp)
- [javascript.info](https://javascript.info/object)

## while loops
The syntax of a while loop is simple:
```javascript
while(condition)
{
  // Do something here.
}
```

Let's write some code that'll print all the numbers from 0 to 3:
```javascript
let counter = 0;
while (counter <= 3)  // Condition
{
  console.log(counter); // Print counter at this point.
  counter++;  // Increase the counter.
}
```

If you run the code above you'll get the following output:
```
0
1
2
3
```


Consider what would happen if we didn't increase the counter:
```javascript
let counter = 0;
while (counter <= 3)  // Condition
{
  console.log(counter); // Print counter at this point.
}
```
What would happen is that the computer would print "0" forever (or just break depending on where you run it). Since counter doesn't ever change, it will always be 0 and so 0 will always be less than or equal to 3 (0 <= 3).

## for loops
The syntax of a for loop is as follows:

```javascript
for (initializer; condition; stepFunction)
{
  // Do something
}
```

Below we can simplify the while loop from the previous section:

```javascript
for (let counter = 0; counter <= 3; counter++)
{
  console.log(counter);
}
```
This counter pattern is one of the most popular uses of for loops. Consider the following code:

```javascript
const classmates = ["Ilsa", "Khizar", "Robert", "Winny", "Brian"];
for (let i = 0; i < classmates.length; i++)
{
  console.log(classmates[i]);
}
```

This code will print:
```
Ilsa
Khizar
Robert
Winny
Brian
```

## Loops in loops

The nice thing about loops is that you can have one inside another. Below we'll have one loop count to 3 while a loop inside it counts to 5:

```javascript
for (let i = 0; i <= 3; i++)
{
  console.log("Entering iteration of outer loop while i = " + i + ".");
  for (let j = 0; j <= 5; j++)
  {
    console.log("  Entering iteration of inner loop while j = " + j);
  }
}

```

Try running the above piece of code in your browser. Notice h ow the inner loop prints the status of `j` multiple times between statuses of `i`.

## A word on formatting

You may have noticed that within "blocks" of code text is indented. This is a standard practice that you must follow to keep your code maintainable. If I or Mr. Whalen catch you not indenting your code he _will_ lower your grade. He'll also make fun of you in front of the entire class.

## Control flow

You can have any kind of command within your while loop, including "if" statements. Consider the following:

```javascript
const colors = ["blue", "red", "green"];

for (let i = 0; i < 10; i++)
{
  console.log(colors[i])
  if (colors[i] == "green")
  {
    console.log("green is not a creative color!");
  }
}
```

The code works as expected: It prints each of the colors, except it also prints "green is not a creative color".

## More
This tutorial is continued in this folder's `main.js` file.
