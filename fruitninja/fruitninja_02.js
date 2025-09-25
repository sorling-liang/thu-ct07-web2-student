let score = 2;
let missed = 10;
let timer = 0;

let bg;

let gameStart = false;

let bgm;
let soundfx;

function preload() {
    bg = loadImage("assets/dojobackground.png");
    bgm = createAudio("assets/fruit-ninja-bgtrack.mp3");
    soundfx = createAudio("assets/fruit-ninja-combo.mp3");
}

function setup() {
    new Canvas(800,600);
    background("brown");
}

function draw() {
    clear(); // erase the canvas
    
    image(bg, 0,0, width, height); // background image

    if (gameStart === true) {
        //displayGameOver();
        displayGameStats(); // game progress statistics
    } else { 
        displayStartScreen();
    }

    if (kb.presses("space")) {
        gameStart = true;
    }
    else if (kb.presses("1")) {
        bgm.loop(); // play continuously
    }
    else if (kb.presses("2")) {
        soundfx.play();
    }    
    else if (kb.presses("down")) {
        bgm.stop();
    }



    //else {
    //     displayGameOver();
    // }
}

function displayStartScreen() {
    // waiting for space key press
    fill("red"); // pen color
    textSize(48);
      //       x        y
    textAlign(CENTER, CENTER);
    text("FRUIT NINJA", width/2, height/2);

    fill("white"); // pen color
    textSize(24);
    text("Press SPACE to start",   width/2, height/2+50);
}

function displayGameStats() {
    fill("white"); // pen color
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Missed: 0", width/2, height/2);
}

function displayGameOver() {
    // draw text
    // red text to show GAME OVER per screenshot
    // white text for game stats
    fill("red"); // pen color
    textSize(48);
      //       x        y
    textAlign(CENTER, CENTER);
    text("GAME OVER", width/2, height/2);
    fill("white"); // pen color
    textSize(24);
    text("Score: " + score,          width/2, height/2+50);
    text("Missed Fruits: " + missed, width/2, height/2+80);
    text("Press SPACE to Restart",   width/2, height/2+110);
}