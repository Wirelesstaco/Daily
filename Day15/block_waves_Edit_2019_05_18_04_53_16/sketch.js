var pos = 0;
var colorspeed = 0
var blockH = 15;
var blockW = 20;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  background(0);
  var blocknum = 54;
  for (var i = 4; i < blocknum; i++) {
    rect(width / 2 - blockW * i / 8 + (sin(pos * i) * i / width) * width * 4, height - blockH * 1.4 * i + 30, blockW * i / 4, blockH);
    fill(abs(sin(pos * i / 8) * 145 + 100), abs(sin(pos * i / 8) * 72 + 10), abs(sin(pos * i / 8) *10 + 50));
  }
  pos += .002;
  colorspeed += 1;
}
