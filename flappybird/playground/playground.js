// the final game

// variables goes here
let bird, floor; // sprites
let bg, base; // images

let flapMidImg, flapDownImg, flapUpImg; // bird images

// load media files like images or sound effects
function preload() {
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png'); // floor

    // load 3 images into 3 variables
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    flapUpImg = loadImage('assets/yellowbird-upflap.png');
}


// similar to "when green flag clicked"
// run once
function setup() {
    //       width, height
    new Canvas(400, 600); // smart phone
    
    // color name is fine
    background("skyblue"); // gray

    // bird sprite
    bird = new Sprite();
    bird.img = flapMidImg;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2; // heavier = stronger pull from gravity
    bird.drag = 0.02; // air resistance
    bird.bounciness = 0.9;
    bird.collider = "dynamic";

    world.gravity.y = 10;

    floor = new Sprite();
    floor.collider = "static"; // dont move, stay at the position
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.img = base;
}

// called repeatedly 60 times per 1 second
// where interaction and animation
function draw() {
    // show the background image
    // width: width of the canvas object
    // height: height of the canvas object
    image(bg, 0, 0, width, height);
}