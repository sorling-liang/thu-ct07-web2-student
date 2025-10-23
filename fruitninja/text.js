let starWars = [
    "long long long time ago,",
    "there was a group of students",
    "",
];


function setup() {
    new Canvas(400, 600);
    background('hotpink');
}

function draw() {
    fill("white"); // text colour
    textAlign(CENTER, CENTER);
    textSize(48); // font size
    text("Hello MEE", width/2, height/2);
}