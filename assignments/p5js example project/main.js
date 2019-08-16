//
// p5js
//

// This is a simulation where we drop a rectangle into water.


const CONSTANTS = {
  g: .012, // Measured in pixels/tick/tick
  dt: 1 // Measured in ticks.
}

function createDefaultShape() {
  return {
    angle: 0,
    angularVelocity: 0,
    angularAcceleration: 0,
    position: createVector(0, 0),
    velocity: createVector(0, 0),
    acceleration: createVector(0, 0),

    draw: function() {
      push();
      rectMode(CENTER);
      translate(this.position);
      rotate(this.angle);
      rect(0, 0, 40, 40);
      pop();
    },
    tick: function() {
      this.velocity.add(p5.Vector.mult(this.acceleration, CONSTANTS.dt));
      this.position.add(p5.Vector.mult(this.velocity, CONSTANTS.dt));
      this.angularVelocity += this.angularAcceleration* CONSTANTS.dt;
      this.angle += this.angularVelocity * CONSTANTS.dt;
    }
  };
}

let shape;

function setup() {
  createCanvas(720, 640);
  shape = createDefaultShape();
  shape.acceleration = createVector(0, CONSTANTS.g);
  shape.angularVelocity = .013;
  shape.velocity = createVector(.7, -.4);
  shape.position.y = height * .2;
}

function resetDrawingTools() {
  strokeWeight(1);
  stroke();
  fill(0);
  rectMode(CORNER);
}
function resetPosition() {
  rotate(0);
  translate(0, 0);
}
function draw() {
  clear();
  push();
  noStroke();
  fill(0, 0, 0xf4);
  rect(0, height * 2/3, width, height);
  pop();
  
  if (shape.position.y > (height * 2/3)) { // If we're in the water.
  shape.acceleration = (p5.Vector.mult(
    createVector(shape.velocity.x * abs(shape.velocity.x),
                 shape.velocity.y * abs(shape.velocity.y)), -.01)); // Drag force
  
    shape.angularAcceleration = -.01 * shape.angularVelocity; // Drag force
    shape.acceleration.y -= .02; // Buoyant force
  }
  else {
    if (shape.acceleration.y != CONSTANTS.g)
    {
       console.log(shape.acceleration.y);
    }
    shape.acceleration.x = 0;
    shape.acceleration.y = CONSTANTS.g;
  }

  shape.tick();
  shape.draw();
}
