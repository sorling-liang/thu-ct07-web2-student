let score = 2;
let missed = 10;

let bg;

let gameStart = false;

/*
he checks the image size of dojo
he guesstimate the size of the canvas himself
*/
/*
he can load bg image, by refering to flappybird game code
*/
/*
he is trying to draw Text (for game on and game over)
see non-guided folder for 2 screenshots from demo game
*/
function preload() {
    bg = loadImage("assets/dojobackground.png");
}

function setup() {
    new Canvas(800,600);
    background("brown");
}

function draw() {
    image(bg, 0,0, 800,600);
}