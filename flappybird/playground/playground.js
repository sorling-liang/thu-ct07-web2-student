// Lesson 5
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
    bird.bounciness = 0.5;
    bird.collider = "dynamic"; // can react to other sprite

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

    // || or condition in JavaScript
    // && and condition in JavaScript
    if (  kb.presses("space") || mouse.presses("left")  ) {
        bird.vel.y = -5; // go in upward direction; velocity in the direction y axis
        bird.sleeping = false; // wake up if sleeping
    }

    // if (mouse.presses("left")) {
    //     new Sprite(mouseX, mouseY, 30, 30, "dynamic");
    // }
    // if (mouse.presses("right")) {
    //     new Sprite(mouseX, mouseY, 30, 30, "static");
    // }

    fill("blue");
    textSize(14);
    //                                      x   y
    text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
    text('is moving: ' + bird.isMoving, 10, 40);
}