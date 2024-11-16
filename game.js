let gameStarted = false;  

//grass straw function
function grass_straws(x, y) {
  fill(45, 185, 61);
  rect(x - 300, y, 6, 20);
  rect(x - 320, y, 6, 20);
  rect(x - 310, y + 20, 6, 20);
}

//burrow function
function burrow(x, y) {
  fill(56, 30, 5);
  ellipse(x, y, 130, 30);
}

//cloud function
function cloud(x, y) {
  fill(255);
  ellipse(x, y, 80);
  ellipse(x - 50, y + 30, 80);
  ellipse(x - 60, y - 30, 80);
  ellipse(x - 100, y, 70);
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(143, 240, 255);
  if (!gameStarted) {
    //bunny Lander Text
    stroke(254, 169, 210);
    strokeWeight(4);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(60);
    textStyle(BOLD);
    fill(255);
    text("Bunny Lander", 400, 400);

    //start Text
    fill(255);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    text("Start", 393, 500);
  }

  //functions
  noStroke();
  fill(179, 255, 117);
  rect(0, 630, 1000, 300);

  //grass straws
  grass_straws(400, 730);
  grass_straws(600, 665);
  grass_straws(460, 665);
  grass_straws(550, 738);
  grass_straws(900, 700);
  grass_straws(800, 650);
  grass_straws(1000, 750);
  grass_straws(1050, 650);
  grass_straws(780, 750);
  grass_straws(320, 650);

  //burrow
  burrow(400, 724);

  //clouds
  cloud(400, 130);
  cloud(130, 190);
  cloud(807, 190);
  cloud(600, 50);
  cloud(200, 9);
}

function mousePressed() {
  //click to start
  if (!gameStarted && mouseX > 355 && mouseX < 430 && mouseY > 476 && mouseY < 500) {
    gameStarted = true;  
  }
}
