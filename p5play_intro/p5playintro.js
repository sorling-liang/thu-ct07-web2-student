// for your variables
let ball;
let floor;

function setup() {
  // Set up the canvas
  new Canvas(600, 400);
  // background(200); // gray-tone 
  background("skyblue"); // can use color names

  // Basic shape testing
  // write your codes here
  // fill("blue");
  // strokeWeight(10); // pen size
  // stroke("orange"); // line colour

  // //     x  y  diameter
  // circle(50,50,80);
  // //   x    y  w  h
  // // rect: rectangle
  // rect(70,100,200,200);
  // End Basic shape testing

  // Create a bouncing ball sprite
  // write your codes here
  ball = new Sprite();
  ball.diameter = 50;
  ball.color = "hotpink";
  ball.x = 300; // start from the left side
  ball.y = 0; 
  ball.vel.y = 3; // velocity in the Y direction
  ball.vel.x = 3;
  ball.bounciness = 1.1;

  // world.gravity.y = 10; // gravity like in earth

  floor = new Sprite();
  floor.w = 100; // width
  floor.h = 25; // height
  floor.y = 380; // y position
  floor.color = "blue";
  floor.collider = "static"; // non-moving block/sprite

} // last line of setup() function

// forever loop; run 60 times per second
function draw() {
    // write your codes here
    // erase the drawing paper
    background("skyblue"); // can use color names

    if (ball.x > width) {
        ball.vel.x = -1 * ball.vel.x; // go in reverse direction
    }

    // code challenge: write the if condition
    // for ball to bounce off the left wall.
    if (ball.x < 0) {
      ball.vel.x = -1 * ball.vel.x;
    }

    // height // bottom of the drawing canvas
    if (ball.y > height) {
      ball.vel.y = -1 * ball.vel.y; // go in reverse direction
    }
    if (ball.y < 0) {
      ball.vel.y = -1 * ball.vel.y; // go in reverse direction
    }  

    floor.x = mouseX; // mouse position use mouseX
    floor.y = mouseY;

} // this is the last line