// this is a comment
let posx = 50;
let posy = 50;

// on green flag clicked
function setup() {
    // give me a blank drawing paper, size 300 width, 300 height
    new Canvas(600, 300);
    background("white"); // graytone background color
}

// forever block; refresh at 60 times per second
function draw() {
    background("white"); // graytone background color

    fill("red"); 
    // x    y    diameter
    circle(posx, posy, 50);
    posx = posx + 1;
    posy = posy + 0.41;
    fill("yellow"); 
    circle(150, 105, 50);
    fill("green"); 
    circle(150, 160, 50);
}