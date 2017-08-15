var day = [];
var dayofWeek =["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
var dayofWeekSmall =["S", "M", "T", "W", "T", "F", "S"];
var todayIs;
var myfont;

function preload(){
    myfont = loadFont("AlfaSlabOne-Regular.ttf");
}

function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(255,13,192);
    noStroke();
    fill(0,100);

//    HOW CAN I CLEAN UP THIS LOOP CODE AND COMBINE IT WITH THE LOOP BELOW IT? I'm creating the new objects here but doing some unnecessarily complex math to put variables in a grid for x/y positions of my new objects. Can I do this in another constructor or another function outside of the draw loop?
    for(var i = 0; i<7; i++){
        var dayW = width/9;
        var grid = map(dayW, width/9, width-width/9, 0, width);
        var wDay = width/10;
        if(windowHeight>400){
            var hDay = height/3;
        }else{
            var hDay = height-height/5;
        }
        var x = grid + dayW;
        rectMode(CENTER);
        var label = dayofWeek[i];
        var smallLabel = dayofWeekSmall[i];
        day[i] = new Day(x*1.5+dayW*i, height/2, dayW-dayW/12, hDay, label, smallLabel);
        //    day[i] = new Day(x+wDay*i, height/2, wDay-wDay/12, hDay);
    }
    
    for(var i = 0; i<7; i++){
        day[i].display();
//      day[i].circle();
//      todayIs = dayofWeek[i];
        day[i].textDisplay();
    }
}

function Day(x, y, w, h, label, smallLabel) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.y = h;
    this.label = label;
    this.smallLabel = smallLabel;
    todayIs = false;
    var dayW = w;
    var grid = map(dayW, width/10, width-   width/10, 0, width);
    this.display = function() {
        rect(x, y, dayW, h, 20);
    }
    this.circle = function() {
        ellipse(x, y, 10, 10);  
    }
    this.textDisplay = function(){
        textFont(myfont);
        
        fill(0);
        textAlign(CENTER, CENTER);
        var textX = x - grid*2;
        if(windowWidth>1000 && windowHeight >300){
            var textY = y-h/3-grid*3;
            textSize(30);
            text(label, textX, textY);
        }else if (windowHeight<1000 && windowWidth>700){
            var textY = y-h/3-(grid*5);
            textSize(20);
            text(label, textX, textY);
        }else{
            var textY = y-h/3-(grid*6);
            textSize(20);
            strokeWeight(4);
            text(smallLabel, textX, textY);
        }
        
        fill(0,100);
    }
}

////    this syntax is breaking my code
////    was attempting to setup to check what day it is. future iterations will involve a modulo.
//function dayOfWeekArray() {
//        var dayCounter = 0;
//        for(i; i<7; i++){
//            if(dayCounter == 0){
//                dayofWeek[i] = Sunday;
//                i++;
//            } elseif (dayCounter ==1){
//                dayofWeek[i] = Monday;
//                i++;
//            }elseif (dayCounter == 2){
//                dayofWeek[i] = Tuesday;
//                i++;
//            }elseif (dayCounter == 3){
//                dayofWeek[i] = Wednesday;
//                i++;
//            }elseif (dayCounter ==4){
//                dayofWeek[i] = Thursday;
//                i++;
//            }elseif (dayCounter ==5){
//                dayofWeek[i] = Friday;
//                i++;
//            }elseif (dayCounter ==6){
//                dayofWeek[i] = Saturday;
//                i++;
//            }
//        }
//}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}