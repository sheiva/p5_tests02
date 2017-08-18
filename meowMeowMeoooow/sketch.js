var sound;
var img;
var img2;
var img3;
var soundRoboKitty;
var button;
var button2;
var button3;
var soundMonkeyMeow;
var fonty;

function preload(){
//    sound = loadSound("TomCat-Mr_Smith-2055290520.mp3");
    img = loadImage("kitten_original_pexels-photo.png");
    img2 = loadImage("roboKitty.png");
    img3 = loadImage("monkey_selfie.png");
    sound = loadSound("meowMO.mp3");
    soundRoboKitty = loadSound("jeremyTheCat_RoboKitty.mp3");
    soundMonkeyMeow = loadSound("johnnyMeowMeow.mp3");
    fonty = loadFont("AmaticSC-Bold.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(fonty);
    textSize(100);
    textAlign(CENTER);
}

function draw() {
    background(100,9,237); 
    fill(0);
    button = windowHeight/3;
    button2 = windowHeight/3;
    button3 = windowHeight/3;

    if (width <1400){
        ellipse(windowWidth/2, windowHeight/2, button, button);
        image(img, windowWidth/2-img.width/2, windowHeight/2-img.height/2);
        fill(255, 100);
        text('MEOW HORN', windowWidth/2, windowHeight/2 + button);
        fill(0);
    }else {
        ellipse(windowWidth/2, windowHeight/2, button, button);
        ellipse(windowWidth/4, windowHeight/2, button2, button2);
        ellipse(windowWidth-windowWidth/4, windowHeight/2, button3, button3);
        image(img, windowWidth/2-img.width/2, windowHeight/2-img.height/2);
        image(img2, windowWidth/4-img2.width/2, windowHeight/2-img2.height/2);
        image(img3, windowWidth-windowWidth/4-img3.width/2, windowHeight/2-img3.height/2);
        fill(255, 100);
        text('MEOW HORN', windowWidth/2, windowHeight/2 + button);
        text('ROBO KITTEH', windowWidth/4, windowHeight/2 + button);
        text('ME MEOW', windowWidth-windowWidth/4, windowHeight/2 + button);
        fill(0);

    }
}

function mousePressed(){
    var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);
    var d2 = dist(windowWidth/4, windowHeight/2, mouseX, mouseY);
    var d3 = dist(windowWidth-windowWidth/4, windowHeight/2, mouseX, mouseY);

    //Check if the distance between mouse is less than the RADIUS (not the diameter)=> /2
    if(d < button/2 && mouseIsPressed==true){
        sound.jump(0);
        sound.play();
    }
    if(d2 < button2/2 && mouseIsPressed==true && width >= 1400 ){
        soundRoboKitty.jump(0);
        soundRoboKitty.play();
    }
    if(d3 < button3/2 && mouseIsPressed==true && width >= 1400){
        soundMonkeyMeow.jump(0);
        soundMonkeyMeow.play();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}