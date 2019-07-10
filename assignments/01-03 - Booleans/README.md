# A quick primer on Booleans

Booleans can be difficult. The description in the JavaScript Grammar Guide is lackluster so I'll link a couple of resources below if you weren't paying attention in class:

- [Introduction to Truth Tables and Boolean Algebra](https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94) - Use this if you don't have much time and you just want to get to the good parts. Truth tables are very useful for understanding the foundations of boolean values.
- [W3 Schools Logical Comparators](https://www.w3schools.com/js/js_comparisons.asp) -- A comprehensive explanation of operators and logic.
- [Crash Course Computer Science](https://www.youtube.com/watch?v=gI-qXk7XojA) - A low level introduction to boolean values and their representations in real circuitry. Take a look if you want a real low level understanding of how computers work..

## Expression evaluation
In programming, "evaluation" is just a fancy word for getting the result of an expression. For example, the expression `5 + 8` evaluates to `13`. In the rest of this document and throughout your programming career you'll see the output of an expression, in this case `13`, referred to as a "return value".

## Operators
Many different symbols are used to represent "and", "or", and "not". Luckily for us, JavaScript and most of the civilized programming world has settled on basically the same syntax to represent these operators. In the below examples, `a` and `b` are JavaScript variables.

- `!a` --- This returns the value opposite of `a`; if `a` is `true` then it returns `false`, and if `a` is `false` it returns true.
- `a == b` --- This returns `true` if `a` and `b` are the same and `false` otherwise.
- `a != b` --- This returns `true` if `a` and `b` are different and `false` otherwise. For example, `true != false` revaluates to `true`
- `a || b` --- This returns `true` if either `a` or `b` are `true`. If both `a` and `b` are `true`, it still returns `true`. Notice that the converse of this is also useful: `a || b` returns false if and only if both `a` and `b` are `false`.
- `a && b` --- This returns `true` if and only if both `a` and `b` are `true`.

## Expressions that evaluate to booleans
You can also compare numbers using the information you've learned about booleans. The basic operators are simple: `<`, `>`, `<=`, and `>=`, which correspond to "less than", "greater than", "less than or equal to", and "greater than or equal to".
For example, the expression `4 > 2` will evaluate to true. Note that operators that `4 > 4` and `3 < 3` will both evaluate to `false` because 4 is _not_ greater than 4 and 3 is _not_ less than 3.

Note that you can use `==` and `!=` with these values too, so `8 != 8` will evaluate to `false` because `8` _is_ equal to `8`.

You can combine also multiple operators in a single line in JavaScript. You can do this by placing parenthesis around parts of the expression you want to run first. When evaluating an expression programs will evaluate whatever's in parenthesis before moving on, just like in mathematics.

**Operator precedence** is just a fancy term on the AP that refers to the order in which operations are made. [This page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) offers a comprehensive overview of precedence. As far as basic math operations are concerned (no less than or equal to symbols), you can evaluate most expressions in your head with PEMDAS.

## More
This tutorial is continued in this folder's `main.js` file.
