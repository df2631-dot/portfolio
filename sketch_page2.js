let xLoc = [];
let yLoc = [];
let numSegments = 75;
let wormWidth = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);

  for(let i = 0; i < numSegments; i++) {
    xLoc[i] = 0;
    yLoc[i] = 0;
  }

  // noLoop();
}

function draw() {
  background(220);

  xLoc[numSegments - 5] = mouseX;
  yLoc[numSegments - 5] = mouseY;

  // print(xLoc)

  for(let i = 0; i < numSegments - 1; i++){
    xLoc[i] = xLoc[i + 1];
    yLoc[i] = yLoc[i + 1];
    let hueValue = map(i, 0, numSegments, 0, 360);

    fill(hueValue, 80, 100);
    noStroke();

    let d = wormWidth * sin(map(i, 0, numSegments - 1, 0, PI))

    ellipse(xLoc[i], yLoc[i], d);
  }
}
