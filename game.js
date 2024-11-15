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
  stroke(255, 0, 0);
  strokeWeight(2);
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(60);
  textStyle(BOLD);
  fill(255);
  text("Bunny Lander", 400, 400);

  function heart(x, y, s) {
    fill(255, 0, 0);
    beginShape();
    vertex(390, 490);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
    }
//text on button
fill(0);
textFont("Helvetica");
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
text("Start", 393, 500);


  
}
