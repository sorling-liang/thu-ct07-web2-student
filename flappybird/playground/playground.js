// the final game

// variables goes here
let bird, floor; // sprites
let bg, base; // images

// load media files like images or sound effects
function preload() {
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png'); // floor
}


// similar to "when green flag clicked"
// run once
function setup() {
    //       width, height
    new Canvas(400, 600); // smart phone
    
    // color name is fine
    background("skyblue"); // gray

    floor = new Sprite();
    floor.collider = "static"; // 
    floor.y = height - 50;
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