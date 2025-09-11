// Lesson 5
// variables goes here
let bird, floor; // sprites
let bg, base; // images

let flapMidImg, flapDownImg, flapUpImg; // bird images

// lesson 5 part 2 - pipes
let pipeGroup;
let pipeImg;
let bottomPipe, topPipe;

let gameOverImg, gameOverLabel;
let startScreenImg, startScreenLabel;

let startGame = false;

// lesson 7 part b
let score = 0;
let digitImgs = []; // empty array
let scoreGroup; // sprite group for easy management


// load media files like images or sound effects
function preload() {
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png'); // floor

    // load 3 images into 3 variables
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    flapUpImg = loadImage('assets/yellowbird-upflap.png');

    // pipe image
    pipeImg = loadImage('assets/pipe-red.png');

    // game over image
    gameOverImg = loadImage('assets/gameover.png');

    // start screen image
    startScreenImg = loadImage('assets/message.png');

    // lesson 7 part 2
    let prefix = "assets/";
    let postfix = ".png";

    // loop to load all 10 digits
    for (let count=0; count<10; count++) {
        let filename = prefix + count + postfix;
        digitImgs[count] = loadImage(filename);
    }
}


// similar to "when green flag clicked"
// run once
function setup() {
    //       width, height
    new Canvas(400, 600); // smart phone
    
    // color name is fine
    background("skyblue"); // gray

    // bird sprite
    bird = new Sprite();
    bird.img = flapMidImg;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2; // heavier = stronger pull from gravity
    bird.drag = 0.02; // air resistance
    bird.bounciness = 0.5;
    bird.collider = "static"; // wait for start game screen
    bird.visible = false;

    world.gravity.y = 10;

    floor = new Sprite();
    floor.collider = "static"; // dont move, stay at the position
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.img = base;

    // group to manage many pairs of pipes
    pipeGroup = new Group();

    // start screen sprite
    startScreenLabel = new Sprite(width/2, height/2, 184, 267, "none");
    startScreenLabel.img = startScreenImg;

    // lesson 7 part 2
    scoreGroup = new Group();
    scoreGroup.collider = "none";
    scoreGroup.layer = 1000; // frontmost
}


// called repeatedly 60 times per 1 second
// where interaction and animation
function draw() {
    // show the background image
    // width: width of the canvas object
    // height: height of the canvas object
    image(bg, 0, 0, width, height);

    if (  kb.presses("space") || mouse.presses()  ) {
        startGame = true;
        startScreenLabel.visible = false;
    }

    if (startGame === true) {
        bird.visible = true;
        bird.collider = "dynamic";

        // || or condition in JavaScript
        // && and condition in JavaScript
        if (  kb.presses("space") || mouse.presses("left")  ) {
            bird.vel.y = -5; // go in upward direction; velocity in the direction y axis
            bird.sleeping = false; // wake up if sleeping
        }

        if (bird.vel.y < -1) {
            bird.img = flapDownImg;
            bird.rotation = -30;
        }
        else if (bird.vel.y > 1) {
            bird.img = flapUpImg;
            bird.rotation = 30;
        }
        else {
            //  when vel.y = 0
            bird.img = flapMidImg;
            bird.rotation =0;
        }

        bird.x = bird.x + 3; // bird flying to the right side slowly
        camera.x = bird.x;
        floor.x = bird.x; // comment off if you want the bird to fly into the void

        // lesson 7 part 2
        for (let pipe of pipeGroup) {
            if ( pipe.passed === false ) {
                let leftEdgeBird = bird.x - bird.width/2;
                let rightEdgePipe = pipe.x + pipe.width/2;

                if ( leftEdgeBird > rightEdgePipe ) {
                    score++;
                    pipe.passed = true;
                }
            }
        }
        // update display after adding score
        displayScore();


        if ( bird.collides(floor) || bird.collides(pipeGroup) ) {
            gameOverLabel = new Sprite(width/2, height/2, 192, 42, "none"); // none: non interacting
            gameOverLabel.img = gameOverImg;
            gameOverLabel.layer = 1000; // come to the frontmost
            gameOverLabel.x = camera.x;

            noLoop(); // dont call draw() anymore

            setTimeout(() => {
                //  write your codes here
                score = 0;
                startGame = false;

                pip

            }, 3000); // 3 seconds delay

        }

        // frameCount is a system variable
        // counting number of frames that has occurred
        if (frameCount === 1) {
            spawnPipePair(); // custom function that we are going to create
        }
        if (frameCount % 120 === 0) {
            spawnPipePair(); // every 2.5 minutes
        }

        // removing pipes in the left side of the canvas
        for (let aPipe of pipeGroup) {
            if (camera.x - aPipe.x > 300+25) {
                aPipe.remove();
            }
        }

        // debugging
        fill("blue");
        textSize(14);
        //                                        x   y
        text('vel.y: ' + bird.vel.y.toFixed(2),   10, 20);
        text('is moving: ' + bird.isMoving,       10, 40); // y must increase
        text('sleeping: '  + bird.sleeping,       10, 60); // y must increase
        text('pipes count: ' + pipeGroup.length,  10, 80); // y must increase
        text('frameCount: ' + frameCount,         10, 100); // y must increase
        text('score: '     + score,               10, 120); // y must increase
    }
}

// my custom function
function spawnPipePair() {
    let gap = 70;
    let midY = random(200, 350); // 250 to 350

    bottomPipe = new Sprite(bird.x+400, midY +200 +gap/2, 52, 320, "static");
    bottomPipe.img = pipeImg;

    pipeGroup.add(bottomPipe);

    topPipe = new Sprite(bird.x+400, midY -200 -gap/2, 52, 320, "static");
    topPipe.img = pipeImg;
    topPipe.rotation = 180;

    // lesson 7 part 2
    topPipe.passed = false; // for keeping score later

    pipeGroup.add(topPipe);

    pipeGroup.layer = 0; // move back-most layer
}

function displayScore() {
    // remove all members in the sprite group
    scoreGroup.removeAll();

    let scoreString = str(score); // get a number, convert it into a string
    let scoreDigitArray = scoreString.split(""); // split each number into a JS Array
    // ["3", "8", "9"]
    //text("digits array: " + scoreDigitArray, 20, 70);

    let offset = 0;
    let middle = bird.x;
    for ( let one of scoreDigitArray ) {
        // inside the repeating
        let onedigit = new scoreGroup.Sprite(middle+offset, 30, 24, 36);
        // shift all digits to the center of the screen
        onedigit.x = onedigit.x - ( (scoreDigitArray.length-1) *25/2 )
        onedigit.img = digitImgs[one];
        offset = offset + 25;
    }
}