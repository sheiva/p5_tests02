var up;
var down;
var moreRed;
var lessRed;
var moreGreen;
var lessGreen;
var moreBlue;
var lessBlue;
var redCol = 100;
var greenCol = 13;
var blueCol = 149;
var toggleAreaX = 10;
var toggleAreaY = 10;
var buttonWidth = 150;
var buttonHeight = 30;
var toggleAreaButtonPad = buttonHeight + 10;
var hexVal;
var buttonTextSize = 13;

function setup() {
    createCanvas(windowWidth,windowHeight);
    textFont("Arial");
    textSize(buttonTextSize);
    moreRed = new Button(toggleAreaX, toggleAreaY, buttonWidth, buttonHeight, "RED++");
    lessRed = new Button(toggleAreaX, toggleAreaY + toggleAreaButtonPad, buttonWidth, buttonHeight, "RED--");
    moreGreen = new Button(toggleAreaX, toggleAreaY + toggleAreaButtonPad*2, buttonWidth, buttonHeight, "GREEN++");
    lessGreen = new Button(toggleAreaX, toggleAreaY + toggleAreaButtonPad*3, buttonWidth, buttonHeight, "GREEN--");
    moreBlue = new Button(toggleAreaX, toggleAreaY + toggleAreaButtonPad*4, buttonWidth, buttonHeight, "BLUE++");
    lessBlue = new Button(toggleAreaX, toggleAreaY + toggleAreaButtonPad*5, buttonWidth, buttonHeight, "BLUE--");
//    up = new Button(width/4, height/2, 100, 30, "UP");
//    down = new Button(width - width/3, height/2, 100, 30, "DOWN");
}

function draw() {
    background(redCol,greenCol,blueCol);
    noStroke();
    fill(255, 50);
    rect(0,0,buttonWidth + 20, buttonHeight*8 +10);
    moreRed.draw();
    lessRed.draw();
    moreGreen.draw();
    lessGreen.draw();
    moreBlue.draw();
    lessBlue.draw();
    textSize(30);
    textFont("monospace");
    if(redCol < 100 && greenCol <100 && blueCol <100){
        fill(255, 100);
    }else{
        fill(0, 100);
    }
    textAlign(RIGHT);
    text("R:" + redCol + " | G:" + greenCol + " | B:" + blueCol, width-50, 50);
    hexVal = "#" + hex(redCol,2) + hex(greenCol,2) + hex(blueCol,2);
    text(hexVal, width-50, 100);
    fill(255);
    textSize(buttonTextSize);
    //    down.draw();
}

function mousePressed(){
    if(lessRed.test() == true){
        if(redCol<=255 && redCol>=10){
            redCol -= 10;
        }else{
            redCol = 0;
        }
    }
    if(moreRed.test() == true){
        if(redCol>=245){
            redCol = 255;
        }else{
            redCol += 10;
        }
    }
    if(moreGreen.test() == true){
        if(greenCol>=245){
            greenCol = 255;
        }else{
            greenCol += 10;
        }
    }
    if(lessGreen.test() == true){
        if(greenCol <=255 && greenCol>=10){
            greenCol -= 10;
        }else{
            greenCol =0;
        }
    }
    if(moreBlue.test() == true){
        if(blueCol>=245){
            blueCol = 255;
        }else{
            blueCol += 10;
        }
    }
    if(lessBlue.test() == true){
        if(blueCol <=255 && blueCol>=10){
            blueCol -= 10;
        }else{
            blueCol =0;
        }
            
    }
 
}

function Button(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    
    this.draw = function(){
        fill(0);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        textAlign(CENTER, CENTER);
        text(this.label, this.x, this.y, this.w, this.h);
    }
    
    this.test = function(){
        return (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h);
    }
    
}

