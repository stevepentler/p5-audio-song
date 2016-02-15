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
  background(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 1000);
  var size2 =  50;
  var col = map(level, 0, 1, 0, 255);

// vertical line
  line(size, 0 + level, size , height);
  line(0, size, width, size);
// horizontal line
  line(size2, 0 + level, size2 , height);
  line(0, size2, width, size2);

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