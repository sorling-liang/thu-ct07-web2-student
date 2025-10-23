function setup() {
    new Canvas(400, 600);
    background('hotpink');
}

function draw() {
    fill("white"); // text colour
    textAlign(CENTER, CENTER);
    textSize(48); // font size
    text("Hello", width/2, height/2);
}