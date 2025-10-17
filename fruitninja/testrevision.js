let bg;
let onefruit;
let watermelon;

function preload() {
    bg = loadImage('assets/dojobackground.png');
    onefruit = loadImage('assets/watermelonwhole.png');
}

function setup() {
    new Canvas(600,400);
    background("white");

    watermelon = new Sprite(width/2, height/2);
    //watermelon.collider = "dynamic";
    watermelon.diameter = 50;
    watermelon.img = onefruit;

    world.gravity.y = 10;
}

/*
load background image: dojo
create a sprite, give the image to the sprite (watermelon whole)
*/

/*
add gravity
add mouse click, the fruit must go up first, then drop if you dont mouse click
*/
function draw() {
    image(bg,0,0,width,height);
    if (mouse.presses()) {
        // change the velocity
        watermelon.vel.y = -2;
    }
}