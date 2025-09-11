// variables section
let score = 0;

let digitImgs = []; // empty array

let scoreGroup; // sprite group for easy management

function preload() {
    let prefix = "assets/";
    let postfix = ".png";

    // loop to load all 10 digits
    for (let count=0; count<10; count++) {
        let filename = prefix + count + postfix;
        digitImgs[count] = loadImage(filename);
    }
}

function setup() {
    new Canvas(400, 600);
    background("steelblue");

    scoreGroup = new Group();
    scoreGroup.collider = "none";
    scoreGroup.layer = 1000; // frontmost
}

function draw() {
    background("steelblue"); // erase

    if ( kb.presses("up") ) {
        score++;

    }
    else if ( kb.presses("down") ) {
        score--;
    }
    else if ( kb.presses("3") ) {
        score = 105;
    }    

    //                       min  max
    score = constrain(score, 0,  999); // keep within the range of 0 to 9
    displayScore(); // call my function
    
    textSize(16);
    text("score: " + score, 20,50);
}

function displayScore() {
    // remove all members in the sprite group
    scoreGroup.removeAll();

    //scoreSprite.img = digitImgs[0];

    let scoreString = str(score); // get a number, convert it into a string
    let scoreDigitArray = scoreString.split(""); // split each number into a JS Array
    // ["3", "8", "9"]
    text("digits array: " + scoreDigitArray, 20, 70);

    let offset = 0;
    let middle = width/2; // center of the screen
    for ( let one of scoreDigitArray ) {
        // inside the repeating
        let onedigit = new scoreGroup.Sprite(middle+offset, height/2, 24, 36);
        onedigit.img = digitImgs[one];
        offset = offset + 25;
    }

}