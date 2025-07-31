// the final game

// variables goes here
let bird, floor; // sprites
let bg, base; // images

// load media files like images or sound effects
function preload() {
    bg = loadImage('assets/background-day.png');
}


// similar to "when green flag clicked"
// run once
function setup() {
    // width, height
    new Canvas(400, 600);
    
    // color name is fine
    background("skyblue"); // gray
}

// called repeatedly 60 times per 1 second
// where interaction and animation
function draw() {
    // show the background image
    // width
    /
    image(bg, 0, 0, width, height);
}