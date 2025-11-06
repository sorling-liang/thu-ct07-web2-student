// variables goes here
const LIBRARY = ["SKULL", "BEACH", "COVER", ];

let attempts = 0;
let hidden;
let hint;

let guessInput;
let button1;
let message = "";

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
    button1.position(width/2+30, 250);
    button1.mousePressed( handleUserInput );
    //button1.size(150, 150);
}

function handleUserInput() {
    // write the if condition
    // to check if guess is matching the hidden word
    let guess = guessInput.value();
    console.log("user input: " + guess);

    if (guess.toLowerCase() === hidden.toLowerCase()) {
        message = "You are correct! The hidden word is " + hidden;
    }
    else {
        let matchedletter = [];
        guess = guess.toLowerCase();
        hidden = h
        for (let index=0; index<hidden.length; index++) {

        }
        message = "You are wrong! Try again";
    }
}

// forever loop
function draw() {
    background("skyblue"); // clear();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(36);
    text("Guess the 5 letters hidden word!", width/2, 50);
    text("Attempts: " + attempts, width/2, 90);
    text("Hints: " + hint, width/2, 140);

    fill("blue");
    textSize(18);
    text(message, width/2, 350);
}