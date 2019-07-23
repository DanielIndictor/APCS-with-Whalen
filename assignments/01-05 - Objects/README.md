# Objects

Objects allow you to group attributes by item. In Javascript, an object is anything with attributes. Below some tutorials are given but they may not be necessary to understand the topic.

- [Mozilla Developer Portal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [w3Schools](https://www.w3schools.com/js/js_objects.asp)
- [javascript.info](https://javascript.info/object)

## How to make objects
Consider a car. A car can have many properties like its manufacturer, model, year, and owner. A car model by itself isn't necessarily much use but when the model is coupled with the owner more information can be drawn. For this reason we use objects. Below we construct an object to represent a car I like:

```Javascript
let car = {
  manufacturer: "Tesla",
  model: "S",
  year: 2019,
  owner: "Thammi"
};
```
Notice that properties are provided as `key: value` pairs with commas between them.

You can do this for anything. You can also have multiple objects with the same properties:
```Javascript
let firstHuman = {
  name: "Kai Tong",
  age: 17
}

let secondhuman = {
  name: "Ilsa",
  age: 18
}
```

## How to use objects.
Accessing a property is done simply with the `.` operator:

```Javascript
console.log("This person is called " + firstHuman.name + ".");
console.log("This person is called " + secondHuman.name + ".");
```

The object whose data is being accessed is on the left and the property name is on the right.

## More
This tutorial is continued in this folder's `main.js` file.
