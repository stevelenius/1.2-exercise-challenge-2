function setup() {
  createCanvas(800,600);
}

function draw() {
  if (mouseIsPressed) {
  	fill(255);
  	circle(mouseX,mouseY, 80);
  } else {
  	fill(127);
    square(mouseX,mouseY, 80);
}
  
}