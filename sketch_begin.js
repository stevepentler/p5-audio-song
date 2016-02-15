var song, amplitude, width, height, value;

function preload(){
  song = loadSound('assets/get_lucky.mp3');
}

function setup() {
  song.play();
  width = 800;
  height = 600;
  createCanvas(width, height);
  peaks = song.getPeaks([width]);
  background(0);
  amplitude = new p5.Amplitude();
}

var value = 0 

function draw() {
  background('magenta');
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);
  var col = map(level, 0, 1, 0, 255);
  // fill(col, col*70, col);
  // triangle(0,0,200,3*size,400,0);
  // fill(col, col*level, col);
  // triangle(0,600,200,-3*size/3,400,600);
// top triangle
  fill(col, col*70, col);
  triangle(0,0,width/2,20*size/2,width,0);
  // medium
  fill(col, col, col);
  triangle(0,0,width/2,10*size/2,width,0);
// smallest
  fill(col, col*70, col);
  triangle(0,0,width/2,5*size/2,width,0);
// bottom triangle
  fill(col, col*level, col);
  triangle(0,600,width/2,20*size/2,width/2,600);


  ellipse(4/5*width, 4/5*height, width/2*level, width/4*level);

  fill(col, col*70, col);
  ellipse(4/5*width, 4/5*height, width/6*level, width/6*level);

  ellipse(4/5*width, 4/5*height, width/10*level, width/4*level);

    ellipse(4/5*width, 4/5*height, width/2*level, width/4*level);

  fill(col, col*70, col);
  ellipse(4/5*width, 4/5*height, width/6*level, width/6*level);

  ellipse(4/5*width, 4/5*height, width/10*level, width/4*level);

  // arc(width/2, 10*size/2, width, 10*size/2, 90, HALF_PI);

  // inside
  // fill(col, col*70, col);
  // triangle(0,600,width/2,8*size/2,width/2,600);

  // fill(col, col*level, col);
  // triangle(0,600,width/2,12*size/2,width/2,600);
  fill(value);
  rect(25, 25, 50, 50);

}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
