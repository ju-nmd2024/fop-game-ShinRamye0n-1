function setup() {
  createCanvas(800, 800);
}
function draw() {
  //game starting screen
  background(143, 240, 255);
  
  //text
  textAlign(CENTER);
  textSize(70);
  textStyle(BOLD);
  fill(255);
  text("Bunny Lander", width / 2, height / 2);

 //button
 fill(255, 149, 0);
 noStroke();
 rect(280, 485, 200, 100);
}
