// variables goes here
const LIBRARY = ["SKULL", "BEACH", "COVER", ];

let attempts = 0;
let hidden;
let hint;

let guessInput;
let button1;

function setup() {
    new Canvas(600, 500);
    background("skyblue");
    hidden = random(LIBRARY);
    console.log("hidden word is " + hidden);
    hint = hidden[0] + "_ ".repeat(hidden.length-1);
    //console.log("hint is " + hidden[0]);

    guessInput = createInput("");
    guessInput.position(width/2-150, 250);

    button1 = createButton("Guess");
    button1.position(width/2+20, 250);
}

// forever loop
function draw() {
    background("skyblue"); // clear();

    textAlign(CENTER, CENTER);
    textSize(36);
    text("Guess the 5 letters hidden word!", width/2, 50);
    text("Attempts: " + attempts, width/2, 90);
    text("Hints: " + hint, width/2, 140);
}