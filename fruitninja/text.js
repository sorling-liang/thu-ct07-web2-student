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
    clear();
    background('hotpink');
    fill("white"); // text colour
    textAlign(CENTER, CENTER);
    textSize(20); // font size
    textY = 50;
    // write a loop to draw the text in the array here
    for(let index=0; index<starWars.length; index++) {
        text(starWars[index], width/2, textY);
        textY = textY + 50;
    }
}