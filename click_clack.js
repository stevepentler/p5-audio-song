var song, amplitude, width, height, value;

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

  // conector
  // line(mouseX, height/2, mouseX , height);
  fill('white');
  triangle(0,height,mouseX,mouseY- size,width,height);
  fill(color(0, 0, 255));
  triangle(0,height,mouseX,mouseY,width,height);
  fill('magenta');
  triangle(0,height,mouseX,mouseY+ 30,width,height);


  fill(255);
  stroke(color(0, 0, 255));
  // biggest ellipse
  ellipse(width/2, 3/4*height, 200 - size, 500 - size);
// smaller ellipse
  fill('black');
  ellipse(width/2, 3/4*height, 150, 450);
  // fill('magenta');
  fill(0, 0, 255);
  ellipse(width/2, 3/4*height, 100 - size, 400 - size);
  fill(0)
  ellipse(width/2, height, 50, 350);
  // triangle(size2,height,size,size,width,height);
  // rotateY(size*.01 + frameCount*.01);
  // torus(200, 60);




  // beginShape();
  // vertex(width/2, height/2);
  // bezierVertex(size, size, 80, 75, 80, 20);
  // bezierVertex(size, size, 60, 25, 20, 80);
  // endShape();
}

// function mouseClicked() {
//   if (value == 0) {
//     value = 255;
//     inverseValue = 0;
//   } else {
//     value = 0;
//     inverseValue = 255;
//   }
// }