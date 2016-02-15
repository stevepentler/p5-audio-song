var song, amplitude, width, height;

function preload(){
  song = loadSound('assets/kygo_wait.mp3');
}

function setup() {
  song.play();
  width = 800;
  height = 600;
  createCanvas(width, height);
  peaks = song.getPeaks([width]);
  amplitude = new p5.Amplitude();
}

var value = 'magenta';
var inverseValue = 0;

function draw() {
  background(0);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);
  var size2 =  50;
  var col = map(level, 0, 1, 0, 255);


// vertical line
stroke(color(0, 0, 255));
  line(size, 0 + level, size , height);
// horizontal line
  line(0, size, width, size);

  // setline
stroke('magenta');
  line(size2, 0 + level, size2 , height);
  line(0, size2, width, size2);

// top triangle
  triangle(4/10*width, 75, mouseX, mouseY - size, 6/10*width, 75)
  fill(color(0, 0, 255));
  triangle(4/10*width, 75, mouseX, mouseY - size - 20, 6/10*width, 75)
  fill('magenta')
  triangle(4/10*width, 75, mouseX, mouseY - size - 40, 6/10*width, 75)


  fill('white');
  triangle(0,height,mouseX,mouseY- size,width,height);
  fill(color(0, 0, 255));
  triangle(0,height,mouseX,mouseY,width,height);
  // triangle
  fill(value);
  triangle(0,height,mouseX,mouseY+ 30,width,height);

fill(255);
stroke(color(0, 0, 255));
  // biggest ellipse
  ellipse(width/2, 3/4*height, 200 - size, 500 - size);
// smaller ellipse
fill('black');
  ellipse(width/2, 3/4*height, 150, 450);
fill(0, 0, 255);
  ellipse(width/2, 3/4*height, 100 - size, 400 - size);
stroke(0)
fill('magenta')
  ellipse(width/2, 3/4*height, 50, 50);
  fill('magenta')
  ellipse(width/2, 3/4*height, 50, 50);

stroke(color(0, 0, 255));
fill(0);
  ellipse(width/2, height, 50, 350);
  // white cirlces
fill(255);
  ellipse(width/2, height, 20, 20);
  ellipse(width/2, height, 10, 10);
  ellipse(width/2, height - 20, 20, 20);
  ellipse(width/2, height - 20, 10, 10);
  ellipse(width/2, height - 40, 20, 20);
  ellipse(width/2, height - 40, 10, 10);
  ellipse(width/2, height - 60, 20, 20);
  ellipse(width/2, height - 60, 10, 10);
  ellipse(width/2, height - 80, 20, 20);
  ellipse(width/2, height - 80, 10, 10);
  ellipse(width/2, height - 100, 20, 20);
  ellipse(width/2, height - 100, 10, 10);
  ellipse(width/2, height - 120, 20, 20);
  ellipse(width/2, height - 120, 10, 10);
  ellipse(width/2, height - 140, 20, 20);
  ellipse(width/2, height - 140, 10, 10);
  // triangle(size2,height,size,size,width,height);
  // rotateY(size*.01 + frameCount*.01);
  // torus(200, 60);




  // beginShape();
  // vertex(width/2, height/2);
  // bezierVertex(size, size, 80, 75, 80, 20);
  // bezierVertex(size, size, 60, 25, 20, 80);
  // endShape();
}

function mouseClicked() {
  if (value == 0) {
    value = 'magenta';
    inverseValue = 0;
  } else {
    value = 0;
    inverseValue = 'magenta';
  }
}