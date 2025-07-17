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

  floor = new Sprite();
  floor.w = 600;
  floor.y = 380;
}

// forever loop; run 60 times per second
function draw() {
  // write your codes here
}