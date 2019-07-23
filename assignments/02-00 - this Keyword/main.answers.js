//
// The this keyword
//

// Remember that there is a default global object in Javascript called "window".
console.log('In this context, the this object refers to ' + this);

// Notice that the keyword refers to window even if we're
// using a higher order function.
function outer()
{
  function inner()
  {
    console.log('this in the inner function refers to ' + this);
  }

  inner();
  console.log('this in the outer function refers to ' + this);
}
outer();


// An object containing a function does change the context of this.
rectangularPrism = {
  width: 1,
  height: 2,
  length: 3,
  getVolume: function () {
    return this.width * this.height * this.length;
  }
}

console.log('The volume of the rectangular prism is ' +
            rectangularPrism.getVolume());


// Your turn: Make an object for a sphere that has a radius
// as one of its attributes whose volume you can get by calling
// "sphere.getVolume()" like the above rectangularPrism object.
// You can use Math.PI to get an accurate Pi value.
sphere = {
  radius: 32.2,
  getVolume: function () {
    return Math.PI * 4 / 3 * this.radius * this.radius * this.radius;
  }
}

console.log('The volume of the sphere is ' +
            sphere.getVolume());


// Note that you must understand what's in the README.md to get a good grasp of the this keyword.
