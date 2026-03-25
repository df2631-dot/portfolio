let trail = [];
let numSegments = 60;
let wormWidth = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  background(0);
}

function draw() {
  background(0, 0.05);

  let mx = constrain(mouseX, 0, width);
  let my = constrain(mouseY, 0, height);

  let pos = {
    x: mx,
    y: my,
    c: frameCount % 360
  };

  console.log(trail);

  trail.push(pos);

  if (trail.length > numSegments) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    let segment = trail[i];
    let d = wormWidth * sin(map(i, 0, trail.length - 1, 0, PI));

    fill(segment.c, 80, 100);
    noStroke();
    drawMirrored(segment.x, segment.y, d);
  }
}

function drawMirrored(x, y, d) {
  ellipse(x, y, d);
  ellipse(width - x, y, d);
  ellipse(x, height - y, d);
  ellipse(width - x, height - y, d);
}
