function setup() {
  createCanvas(560, 560);
}

function draw() {
 background(69,69,69);
  if (mouseIsPressed) {
    fill(255,255,255);
  } else {
    fill(120,255,100);
  }
 ellipse(mouseX, mouseY,200,200);
  if (mouseIsPressed) {
    fill(150,150,150);
  } else {
    fill(120,101,201);
  }
 ellipse(mouseX, mouseY,150,150);
}

