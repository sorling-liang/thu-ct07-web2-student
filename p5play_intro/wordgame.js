// variables goes here
const LIBRARY = ["SKULL", "BEACH", "COVER", ];

let attempts = 0;
let hidden;

function setup() {
    new Canvas(600, 500);
    background("skyblue");
    hidden = random(LIBRARY);
    console.log("hidden word is " + hidden);
    console.log(hidden[0])
}

// forever loop
function draw() {
    background("skyblue"); // clear();

    textAlign(CENTER, CENTER);
    textSize(36);
    text("Guess the 5 letters hidden word!", width/2, 50);
    text("Attempts: 0", width/2, 90);
    text("Hints: T _ _ _ _", width/2, 140);
}