let starWars = [
    "long long long time ago,",
    "there was a group of students",
    "started on their journey to learn to code",
    "and this is their story..",
];

let xpos, ypos;
let textY;

function setup() {
    new Canvas(400, 600);
    background('hotpink');
}

function draw() {
    // how to erase?
    fill("white"); // text colour
    textAlign(CENTER, CENTER);
    textSize(18); // font size
    // write a loop to draw the text in the array here
    for(let index=0; index<starWars.length; index++)
    text("Hello MEE", width/2, height/2);
}