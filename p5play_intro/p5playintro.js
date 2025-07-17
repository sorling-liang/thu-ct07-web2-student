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
  ball.y = 0; // start from the top
  ball.vel.y = 3; // velocity in the Y direction
  ball.bounciness = 0.9;

  world.gravity.y = 10;

  floor = new Sprite();
  floor.w = 600; // width
  floor.h = 25; // height
  floor.y = 380; // y position
  floor.color = "blue";
  floor.collider = "static";
}

// forever loop; run 60 times per second
function draw() {
  // write your codes here
  // erase the drawing paper
  background("skyblue"); // can use color names
}