let d = 20;
let animationRate = 0
let speed = 3;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(125);


//   d = map(mouseY, 0, height, 100, 200);
//   circle(width/2, height/2, d);

    // change its color

    startingColor = color(255,0,0);
    endingColor = color(0,0,255);
    pct = map2(animationRate, 0, width, 0, 1, EXPONENTIAL, OUT);
    fill( lerpColor(startingColor, endingColor, pct) );

    // draw the circle

    xpos = map2(animationRate, 0, width, 0, width, SINUSOIDAL, BOTH);
    circle(xpos,height/2,d);

    // draw the rectangles

    fill( lerpColor(endingColor, startingColor, pct) );
    // rotatingRectangle(100,100);
    // rotatingRectangle(200,200);
    rotatingRectangle(300,300);

    // draw a jittery circle
    fill(203)
    // circle(100+random(10,20), 300, 100);

    // figure out how to change x over time

    if (animationRate > width || animationRate < 0) {
        speed = speed * -1;
    }
    animationRate = animationRate + speed;

}

function rotatingRectangle(x,y) {
    // draw the rectangle
    push();
    translate(x,y);
    rotate(radians(xpos));
    rect(0,0,10,10);
    pop();
}