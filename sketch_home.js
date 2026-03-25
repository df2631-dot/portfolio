let xLoc = [];
let yLoc = [];
let numSegments = 60;
let wormWidth = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numSegments; i++) {
    xLoc[i] = width / 2;
    yLoc[i] = height / 2;
  }

  background(0);
}

function draw() {
  background(0, 0.05);

  xLoc[numSegments - 1] = mouseX;
  yLoc[numSegments - 1] = mouseY;

  for (let i = 0; i < numSegments - 1; i++) {
    xLoc[i] = xLoc[i + 1];
    yLoc[i] = yLoc[i + 1];
    let d = wormWidth * sin(map(i, 0, numSegments - 1, 0, PI));

    drawMirrored(xLoc[i], yLoc[i], d);
  }
}

function drawMirrored(x, y, d) {
  ellipse(x, y, d);
  ellipse(width - x, y, d);
  ellipse(x, height - y, d);
  ellipse(width - x, height -y, d);
}
