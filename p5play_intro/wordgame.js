// variables goes here
const LIBRARY = ["SKULL", "BEACH", "COVER",

];

function setup() {
    new Canvas(600, 500);
    background("skyblue");
}

function draw() {
    background("skyblue"); // clear();

    textAlign(CENTER, CENTER);
    textSize(36);
    text("Guess the hidden word!", width/2, 50);
    text("Attempts: 0", width/2, 90);
    text("Hints: T _ _ _ _", width/2, 140);
}