let gameStarted = false;
let gameOver = false;
let gameWon = false;
let bunnyX = 600;
let bunnyY = 0;
let speed = 20;
let gravity = 0.5;
let thrust = -8;
let softLanding = 10;
let hardLanding = 20;
frameRate(40);

function bunny(x, y, s) {
  //base
  scale(0.6);
  fill(0);
  noStroke();
  ellipse(x + 80, y - 55, 150);
  ellipse(x + 30, y - 50, 135);

  //front paw
  push();
  translate(x + 15, y + 22);
  rotate(3);
  ellipse(0, 0, 50, 30);
  pop();

  //back paw
  push();
  translate(x + 90, y + 20);
  ellipse(0, 0, 40, 30);
  pop();

  //head
  push();
  translate(x - 50, y - 105);
  rotate(1.1);
  scale(0.9);
  ellipse(0, 0, 100, 120);
  pop();

  //1st ear
  push();
  translate(x - 20, y - 154);
  rotate(1.1);
  scale(1.3);
  ellipse(0, 0, 18, 80);
  pop();

  //2nd ear
  push();
  translate(x - 20, y - 170);
  rotate(0.3);
  scale(1.3);
  ellipse(0, 0, 18, 80);
  pop();

  //eye
  push();
  fill(255);
  translate(x - 50, y - 120);
  rotate(1.1);
  ellipse(0, 0, 9, 20);
  pop();

  //tail
  ellipse(x + 140, y - 105, 40);
}

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
  createCanvas(800, 850);
}

function draw() {
  background(143, 240, 255);

  if (!gameStarted) {
    //"Bunny Lander" text
    stroke(254, 169, 210);
    strokeWeight(4);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(60);
    textStyle(BOLD);
    fill(255);
    text("Bunny Lander", 400, 400);

    //"Start" text
    fill(255);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    text("Start", 393, 500);
  }

  //"Game Over"
  if (gameOver) {
    fill(255, 0, 0);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(100);
    textStyle(BOLD);
    text("Game Over", 400, 400);
    return;
  }

  //"Winner!"
  if (gameWon) {
    fill(46, 173, 0);
    textFont("Helvetica");
    textAlign(CENTER);
    textSize(100);
    textStyle(BOLD);
    text("Winner!", 400, 400);
    return;
  }

  //background
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

  //bunny falling
  if (gameStarted && !gameOver && !gameWon) {
    speed += gravity;

    //hopping with spacebar
    if (keyIsPressed && keyCode === 32) {
      speed = thrust;
    }
    bunnyY += speed;

    //landing
    if (bunnyY >= 1200) {
      bunnyY = 1200;

      //landing conditions
      if (speed > hardLanding) {
        gameOver = true;
      } else if (speed <= softLanding) {
        gameWon = true;
      }
      speed = 0;
    }

    //bunny
    bunny(bunnyX, bunnyY, 1);
  }
}

function mousePressed() {
  //click to start
  if (
    !gameStarted &&
    mouseX > 355 &&
    mouseX < 430 &&
    mouseY > 476 &&
    mouseY < 500
  ) {
    gameStarted = true;
  }
}

//keycode
function keyPressed() {
  if (keyCode === 32) {
    speed = thrust;
  }
}
