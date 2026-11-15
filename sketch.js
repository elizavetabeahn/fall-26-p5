function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  rectMode(CENTER);
  noStroke();
}

function draw() {
fill(255)
noStroke()
rect(200, 200, 200, 200)
fill(0)
ellipse(150, 150, 10, 10)
ellipse(250, 150, 10, 10)
stroke(1)
arc(200, 200, 100, 50, HALF_PI, PI)
arc(200, 200, 100, 50, PI, HALF_PI)
}