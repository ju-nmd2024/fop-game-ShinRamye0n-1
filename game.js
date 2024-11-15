// let font;
// function preload() {
//   font = loadFont('PressStart2P-Regular.ttf');
// }

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //game starting screen
  background(143, 240, 255);

  //text
  stroke(254, 169, 210);
  strokeWeight(4);
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(60);
  textStyle(BOLD);
  fill(255);
  text("Bunny Lander", 400, 400);

  //text on button
  fill(255);
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
  text("Start", 393, 500);

  //grass
  noStroke();
  fill(179, 255, 117);
  rect(0, 630, 1000, 300);

  //grass straw function
  function grass_straws(x, y) {
    fill(45, 185, 61);
    rect(x - 300, y, 6, 20);
    rect(x - 320, y, 6, 20);
    rect(x - 310, y + 20, 6, 20);
  }
  grass_straws(400, 700);

  //grass
  grass_straws(600, 665);

  grass_straws(500, 665);

  grass_straws(550, 738);

  grass_straws(900, 700);

  grass_straws(800, 650);

  grass_straws(1000, 750);

  grass_straws(1000, 650);

  grass_straws(780, 750);

  grass_straws(320, 650);

  grass_straws(320, 740);

  grass_straws(1080, 700);

  //burrow function
  function burrow(x, y) {
    fill(56, 30, 5);
    ellipse(x, y, 130, 30);
  }
  burrow(400, 724);

  //cloud

  function mouseClicked() {
    if (mouseX > 355 && mouseX < 427 && mouseY > 476 && mouseY < 500);
  }
}
