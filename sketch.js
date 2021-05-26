var hr = 0;
var mn = 0;
var sc = 0;


function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
    //scAngle = map(sc, 0, 60, 0, 360);
}

function draw() {
  background(0);
  translate(200, 200); 
  rotate(-90); 
  
  hr = hour();
  mn = minute();
  sc = second();


 

  strokeWeight(8)
  stroke(255, 100, 150);
  noFill();
  let sca  = map(sc , 0, 60, 0, 360) 
  arc(0,0,300,300,0,sca);

  stroke(150, 100, 255);
  let mna = map(mn , 0, 60, 0, 360) 
  arc(0,0,280,280,0,mna);

  stroke(150, 255, 100);
  let hra = map(hr % 12, 0, 12, 0, 360) 
  arc(0,0,260,260,0,hra);

  push();
  rotate(sca);
  stroke(255, 100, 150);
  line(0,0, 100, 0);
  pop();
  
  push();
  rotate(mna);
  stroke(150, 100, 255);
  line(0,0, 75, 0);
  pop();

  push();
  rotate(hra);
  stroke(150, 255, 100);
  line(0,0, 50, 0);
  pop();

  stroke(255);
  point(0,0)


  //scAngle = map(sc, 0, 60, 0, 360);
  //mnAngle = map(mn, 0, 60, 0, 360);
  //hrAngle = map(hr, 0, 60, 0, 360);

  //push();
  //rotate(scAngle);
  //stroke(255,0,0);
  //strokeWeight(7);
  //line(0,300,100,300);
  //pop()
  
  //drawSprites();
}