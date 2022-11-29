var state=1;
var r1=255,g1=0,b1=0;
var r2=0,g2=0,b2=0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  textSize(width/20);
  textStyle(BOLD);
}


function draw() {
  background(r2,g2,b2);
  if(state){
    fill(r1,g1,b1);
    rect(width/2,height/2,width*0.9,height-width*0.1,10);
    noStroke();
    fill(r2,g2,b2);
    text("Click to reveal E-mail address",width/2,height/2);
  }
  else{
    fill(r1,g1,b1);
    text("solution@misteryhollow.ink\n(copied to clipboard)",width/2,height/2);
  }
}

function mousePressed(){
  state=0;
  cTC("solution@misteryhollow.ink");
}

function cTC(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
