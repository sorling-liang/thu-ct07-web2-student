let score = 2;
let missed = 10;
let timer = 60;
let fcStart = -1;

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
    new Canvas(1000,600);
    world.gravity.y = 10;
}

function draw() {
    clear(); // erase the canvas
    
    image(bg, 0,0, width, height); // background image

    if (gameStart) {
        if (fcStart < 0) fcStart = frameCount; // keep a record
        
        displayGameStats(); // game progress statistics

        // every 1 second, decrease timer
        if ( (frameCount-fcStart+1) % 60 === 0) {
            timer--;
        }
        if (timer === 0) {
            // handle game over?
            displayGameOver();
            noLoop(); // stop the draw() from repeating
        }

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

    if (mouse.presses()) {
        
    }
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

    textAlign(LEFT, CENTER);
    text("Score: " + score, 10, 28); // y =28

    textAlign(CENTER, CENTER);
    text("Missed: " + missed, width/2, 28); // y =28

    textAlign(RIGHT, CENTER);
    text("Time: " + timer +"s", width-10, 28); // y =28
}

function displayGameOver() {
    clear();
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