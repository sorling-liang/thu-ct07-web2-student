let score;
let missed;

let bg;

let gameStart = false;

/*
he checks the image size of dojo
he guesstimate the size of the canvas himself
*/

/*
he can load bg image, by referring to flappybird code
*/
function preload() {
    bg = loadImage("assets/dojobackground.png");
}

function setup() {
    new Canvas(800,600);
    background("brown");
}

function draw() {
    //image(bg, 0,0, 800,600);
}