var circleW = 80;
var circleH = 80;
var cirArray = [];
var count =0;

// Array of

function setup() {
  createCanvas(800, 800);
  noFill()
  strokeWeight(3);
  stroke(random(255),random(255),random(255));

        for (var j = 0; j < 100; j++) {
         cirArray.push( HALF_PI * floor(random(4)));
        }

}

function mouseClicked() {

}

function drawArc() {
  background(240);
  var num =0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {


      arc(circleW * i + circleW / 2, circleH * j + circleH / 2, circleW, 80, HALF_PI + cirArray[num], HALF_PI + PI + HALF_PI + cirArray[num]);
       num ++
    if(num >100)
      num =0;

    }

  }

}

function draw() {

  drawArc();
  if(count ==0){
  cirArray[floor(random(100))] =HALF_PI * floor(random(4));
  }
  count ++;
  if(count >10)
      count =0;


}
