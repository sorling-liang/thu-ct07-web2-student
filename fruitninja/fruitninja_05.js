let score = 0;
let missed = 0;
let timer = 60; // give 60 seconds of gameplay
let fcStart = -1; // fc for frameCount

let bg; // bg as background

let gameState = "start"; // start-play-gameover

let bgm;
let soundfx;

let fruitGroup;
let fruitHalves;
let fruitTypes; // an Array in JavaScript

/*
week 15:
sebastian starts thinking how to spawn fruits faster as game progress
give him time to implement that

*fixed the bug of slice fruit only when mouse pressed and dragged!

*/

// week 17
// game difficulty increases as game is in play
let difficultyLevel = 1;

function preload() {
    bg = loadImage("assets/dojobackground.png");
    bgm = createAudio("assets/fruit-ninja-bgtrack.mp3");
    soundfx = createAudio("assets/fruit-ninja-combo.mp3");

    let watermelon = { type: "watermelon" };
    watermelon.whole = loadImage("assets/watermelonwhole.png");
    watermelon.half  = loadImage("assets/watermelonhalf.png");

    let peach = { type: "peach" };
    peach.whole = loadImage("assets/peachwhole.png");
    peach.half = loadImage("assets/peachhalf.png");

    let lemon = { type: "lemon" };
    lemon.whole = loadImage("assets/lemon.png");
    lemon.half = loadImage("assets/lemonhalf.png");

    let bomb = { type: "bomb" };
    bomb.whole = loadImage("assets/fruitbomb.png");
    bomb.half = loadImage("assets/fruitbomb.png");

    fruitTypes = [watermelon, peach, lemon, bomb];
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;

    fruitGroup = new Group();
    fruitHalves = new Group();
}

function draw() {
    clear(); // erase the canvas
    
    image(bg, 0,0, width, height); // background image

    if (gameState === "play") {
        if (fcStart < 0) fcStart = frameCount; // keep a record
        
        // slice animation
        if (mouse.pressing()) {
            // mouse is dragged (and pressed down)
            let trail = new Sprite(mouseX, mouseY, 7);
            trail.stroke = "red"; // no outline
            trail.color = "red";
            trail.collider = "none";
            trail.life = 10; // 10 frames

            sliceFruit(); // any fruit to slice
        }
        displayGameStats(); // game progress statistics

        // every 1 second, decrease timer
        if ( (frameCount-fcStart+1) % 60 === 0) {
            timer--;
        }
        if (timer === 0) {
            gameState = "gameover";
            
            return;
        }
        // every second
        if (frameCount % 60 === 0) {
            // use difficultyLevel here
            for (let index = 0; index < difficultyLevel; index++) {
                spawnFruit();
            }
        }

        if (timer < 60)
        for (let one of fruitGroup) {
            const whatIsIt = one.type; // see line 208 in spawnFruit()

            if (one.y > height + 10) {
                
                // not counting bomb as missed

                if (whatIsIt.type != "bomb") {
                    // update variable missed
                    missed++;
                }

                one.remove(); // remove from sprite group
            }
        }
        
        // debugging
        fill("white");
        textSize(18);
        textAlign(LEFT, CENTER)
        text("fruitGroup.length="  + fruitGroup.length, 35,70);
        text("fruitHalves.length=" + fruitHalves.length, 35,90);

    } else if (gameState === "start") { 
        displayStartScreen();

        if (kb.presses("space") || mouse.presses()) {
            gameState = "play";
        }   

    } else if (gameState === "gameover") { 
        displayGameOver();

        fruitGroup.removeAll();
        fruitHalves.removeAll();

        // listen to events to allow restarting of the game
        if (kb.presses("space") || mouse.presses()) {
            timer = 60;
            score = 0;
            missed = 0;

            gameState = "play";
        }   
    }

    // else if (kb.presses("1")) {
    //     bgm.loop(); // play continuously
    // }
    // else if (kb.presses("2")) {
    //     soundfx.play();
    // }    
    // else if (kb.presses("down")) {
    //     bgm.stop();
    // }

    // if (mouse.presses()) {
    //     let abc = new Sprite(mouseX, mouseY, 35);
    //     abc.vel.y = random(-6, -10);
    // }

}

// randomly choose a fruit to spawn
function spawnFruit() {
    let one = new fruitGroup.Sprite();

    let selected = random(fruitTypes);
    one.img = selected.whole; // find the fruit picture
    one.type = selected; // to remember the fruit object

    one.diameter = 40;
    one.x = random(300,500);
    one.y = height - 100;
    one.vel.y = random( -12, -7 );
    one.vel.x = random( -2, 2 );
    one.friction = 0; // no friction
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
    // clear();
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

// slide deck 2
// take note of all the properties
// explain function that takes in parameters
//
function splitFruit(xpos, ypos, fruitObject) {
    // i do for left half of fruit
    let left = new fruitHalves.Sprite(xpos-10, ypos, 40);
    left.img = fruitObject.half;
    left.vel.x = -3; // veer left
    left.vel.y = random(-5, -2);
    left.rotationSpeed = -5; // rotate left
    left.life = 30; // half a second

    // let him do right half of fruit
    let right = new fruitHalves.Sprite(xpos+10, ypos, 40);
    right.img = fruitObject.half;
    right.vel.x = 3; // veer right
    right.vel.y = random(-5, -2);
    right.rotationSpeed = 5; // rotate right
    right.life = 30; // half a second
}

/*
realised no need for fruitHalves group
cos each half fruit has life of 30 frames
so length is always lesser
*/

/*
check his code
where he call sliceFruit(), must be inside mouse.pressing() after slice animation
date: 10-Oct-2025
*/
function sliceFruit() {
    // loop thru all fruits still on screen
    for (let fruit of fruitGroup) {
        if (fruit.sliced) {
            continue; // move on to the next fruit in the group
        }

        // if fruit is still whole
        // calculate the dist
        let d = dist(mouseX, mouseY, fruit.x, fruit.y);
        // since using fruit.d (ie the diameter)
        // check spawnFruit() carefully
        if (d < (fruit.d/2)+5) {
            fruit.sliced = true;

            const fx = fruit.x;
            const fy = fruit.y;
            const whatIsIt = fruit.type; // see line 208 in spawnFruit()

            fruit.remove();
            // explain how to pass parameters to a custom function
            splitFruit(fx, fy, whatIsIt);

            if (whatIsIt.type === "bomb") {
                gameState = "gameover";
            } 
            else {
                score++;
            }

            break; // slice only 1 fruit at each time
        }
    }
}
