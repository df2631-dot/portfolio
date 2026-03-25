let x = 0, y = 0;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
}

function draw() {
  background(220);

  
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  angle = lerp(angle, mouseX, 0.05); 

  
  translate(x, y);

  
  for (let i = 0; i < 4; i++) {
    rotate(angle);       
    rect(0, 0, 100, 15); 
    translate(100, 0);   
  }
}