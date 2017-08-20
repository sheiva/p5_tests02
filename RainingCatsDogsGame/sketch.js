var balls = [];
var total = 10;
var paddle;
var score = 0;
var lives = 3;
var state = 0;
var fonty;
var buttonSize;
var centerXCatButton;
var centerYCatButton;
var centerXDogButton;
var centerYDogButton;
var playButtonX;
var playButtonY;
var centerXResetButton;
var centerYResetButton;
var buttonSize;
var catsAreGreat;
var dogsAreGreat;
var highScore = 0;
var newhighScore;
var doggie;
var smallDoggie;
var kittie;
var smallKittie;

/*
0 - intro
1 - play
2 - end game
3 - pre-grame instructions
*/

function preload(){
    fonty = loadFont("ShareTechMono-Regular.ttf");
    doggie = loadImage("dog.png");
    kittie = loadImage("cat.png");
    smallDoggie = loadImage("dogSmall.png");
    smallKittie = loadImage("catSmall.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    
    textFont(fonty);
    textSize(50);
    textAlign(CENTER, CENTER);
    
    
    
}

function draw() {
  background(255, 12,148);
    if (state == 0){
        drawIntro();
    }else if (state == 1){
        drawPlaying();
    }else if (state == 2){
        drawEnd();
    }else if (state == 3){
        drawInstructions();
    }

}


function drawIntro(){
    fill(0);
    noStroke();
    if(windowWidth <= 500){
        textSize(30);
    }else{
        textSize(50);
    }
    text("IT'S RAINING CATS & DOGS!\n Whose your favorite\nCATS or DOGS?", 0, -100, width, height);
    
//    button setup
    if(windowWidth <= 400){
        buttonSize = 100;
    }else{
        buttonSize = 125;
    }
    
//   intro button cats
    centerXCatButton = width/3;
    centerYCatButton = height-height/4;
    fill(0,200);
    
    ellipse(centerXCatButton, centerYCatButton, buttonSize, buttonSize);
    
    fill(255);
    text("CATS", width/3, height-height/4);
    text("DOGS", width -width/3, height-height/4);
    fill(0);

//   intro button dogs
    centerXDogButton = width -width/3;
    centerYDogButton = height-height/4;
    fill(0,200);
    ellipse(centerXDogButton, centerYDogButton, buttonSize, buttonSize);
    fill(255);
    text("CATS", width/3, height-height/4);
    text("DOGS", width -width/3, height-height/4);
    fill(0);
    
}

function drawPlaying(){
    for (var i = 0; i< balls.length; i++){
        balls[i].update();
        balls[i].render();
    }
    
    paddle.update();
    paddle.render();
    
    if(lives == 0){
        if(highScore<score){
            highScore = score;
            newhighScore = true;
        }
        else{
            newhighScore = false;
        }
        state = 2;
    }
    
    fill(0, 100);
    rect(0, 0, 160, 150);
    fill(255);
    textSize(25);
    text("LIVES: " + lives +"\nSCORE: " + score, 20, 20, 150, 150);
    fill(0);
    
}

function drawEnd(){
    fill(0);
    noStroke();
    if(windowWidth <= 400){
        textSize(30);
    }else{
        textSize(50);
    }
    if (newhighScore){
        text("NEW HIGH SCORE!\nHIGH SCORE: " + score + "\nPlay again?", 0, -100, width, height);
    }else{
        text("GAME OVER!\nYOUR SCORE: " + score + "\nHIGH SCORE: " + highScore + "\nPlay again?", 0, -100, width, height);
    }
    //    button setup
        if(windowWidth <= 400){
            buttonSize = 100;
        }else{
            buttonSize = 125;
        }

    //   end reset button
        centerXResetButton = width/2;
        centerYResetButton = height-height/4;
        fill(0,200);

        ellipse(centerXResetButton, centerYResetButton, buttonSize, buttonSize);
    //    rectMode(CENTER);
    //    rect(centerXResetButton, centerYResetButton, buttonSize, buttonSize);
        fill(255);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("AGAIN!", width/2, height-height/4);
        fill(0);
}

function iLoveCats(){
    catsAreGreat = true;
    dogsAreGreat = false;
    state = 3;
    
}

function iLoveDogs(){
    dogsAreGreat = true;
    catsAreGreat = false;
    state = 3;
}

function drawInstructions(){
    fill(0);
    noStroke();
    var catchIt;
    var avoid;
    if(windowWidth <= 500){
        textSize(30);
    }else{
        textSize(50);
    }
    if(dogsAreGreat){
        catchIt = "DOGS";
        avoid = "CATS";
    }else{
        catchIt = "CATS";
        avoid = "DOGS";
    }
    text("HOW TO PLAY:\nCatch as many "+ catchIt + " as you can!\nClick LEFT & RIGHT to move\nIf you catch " + avoid + " you'll lose a life!\nReady to play?", 0, -100, width, height);
    
//    button setup
    if(windowWidth <= 400){
        buttonSize = 100;
    }else{
        buttonSize = 125;
    }
    
//  Play button
    playButtonX = width/2;
    playButtonY = height-height/6;
    fill(255, 0, 0);
    
    ellipse(playButtonX, playButtonY, buttonSize, buttonSize);
    
    fill(255);
    text("YES!", width/2, height-height/6);
    fill(0);
}

function startTheGame(){
    score = 0;
    lives = 3;
    paddle = new Paddle();
    for(var i = 0; i<total; i++){
        balls[i] = new Ball(paddle);
    }
}

function mousePressed(){
    if(state == 0){
        var catD = dist(mouseX, mouseY,centerXCatButton, centerYCatButton);
        if (catD < buttonSize/2){
            catsAreGreat = true;
            dogsAreGreat = false;
            iLoveCats(); 
        }
        var dogD = dist(mouseX, mouseY,centerXDogButton, centerYDogButton);
        if (dogD < buttonSize/2){
            catsAreGreat = false;
            dogsAreGreat = true;
            iLoveDogs();  
        }
    }else if (state == 1){
        if (mouseX < windowWidth/2){
            paddle.moveLeft();
        }else if (mouseX > windowWidth/2){
            paddle.moveRight();     
        }
    }else if (state == 2){
        var resetD = dist(mouseX, mouseY,centerXResetButton, centerYResetButton);
        if (resetD < buttonSize/2){
          state = 0; 
        }
    }else if (state == 3){
        var playD = dist(mouseX, mouseY, playButtonX, playButtonY);
        if(playD < buttonSize/2){
            state = 1;
            startTheGame();
        }
    }
}


function keyPressed(){
//    if(keyCode == LEFT_ARROW){
//        paddle.moveLeft();
//        return true;
//    }else if(keyCode == RIGHT_ARROW){
//        paddle.moveRight();
//        return true;
//    }
}

function Ball(paddle){ 
    this.paddle = paddle;
    if(windowWidth <= 500){
        this.size = 50;
    }else{
        this.size = 100;
    }
    

    //define the x and y position as a function to called within constructor at bottom
    this.init = function(){
        this.y = random(-height,-this.size);
        this.x = random(this.size, width-this.size);
        this.bad = (random(0,100) <20);
    }
    
    this.render = function(){
        if (this.bad){
            if(dogsAreGreat && catsAreGreat == false){
                fill(255,0,0);
                ellipse(this.x, this.y, this.size, this.size);
                this.drawAKittie();
            }else if (catsAreGreat && dogsAreGreat == false){
                fill(255,0,0);
                ellipse(this.x, this.y, this.size, this.size);
                this.drawADoggie();
            }
            
        }else{
            if(dogsAreGreat && catsAreGreat == false){
                fill(0);
                ellipse(this.x, this.y, this.size, this.size);
                this.drawADoggie();
                
            }else if(catsAreGreat && dogsAreGreat == false){
                fill(0);
                ellipse(this.x, this.y, this.size, this.size);
                this.drawAKittie();
            }
            fill(0);
        }
        
    }
    
    this.drawADoggie = function(){
        rectMode(RADIUS);
        if(windowWidth <=400){
            
            image(smallDoggie, this.x-this.size/2, this.y-this.size/2);
        }else{
            doggie.resize(this.size,this.size);
            image(doggie, this.x-this.size/2, this.y-this.size/2);
        }
        rectMode(CORNER);
    }
    this.drawAKittie = function(){
        rectMode(RADIUS);
        if(windowWidth <= 400){
            image(smallKittie, this.x-this.size/2, this.y-this.size/2);
        }else{
            kittie.resize(this.size,this.size);
            image(kittie, this.x-this.size/2, this.y-this.size/2);
        }
        rectMode(CORNER);
    }
    
    this.update = function(){
        if (score <= 40){
            this.speed = 8;
        }else{
            this.speed = 12;
        }
        this.y += this.speed;
        this.testPaddle();
        
        if (this.y - this.size > height){
            this.init();
        }
    }
    
    
    this.testPaddle = function(){
        var top = (this.y + this.size/2 > this.paddle.y);
        var bottom = (this.y - this.size/2 < this.paddle.y + this.paddle.height);
        var left = (this.x - this.size/2 > this.paddle.x);
        var right = (this.x + this.size/2 < this.paddle.x + this.paddle.width);
        
        if(top && bottom && left && right){
//            this.init();
//            this.paddle.score();
//            score++;
            if(this.bad){
                this.paddle.hit();
//                lives--;
            }else{
                this.paddle.score();
//                score++;
            }
           this.init(); 
        }
    }
    //this will reset the ball position both at a random x and on top of window if the ball goes below the window && this call needs to be at the bottom of the constructor so that it can be called after it's defined
    this.init();
}


function Paddle(){
    if (width >= 500){
        this.width = 250;
    }else{
        this.width = 75;
    }
    this.height = 20;
    this.x = width/2 - this.width;
    this.y = height - 30;
    this.color = color(0);
    
    
    this.update = function(){
//        if (score <= 20){
//            this.speed = 40;
//        }else{
//            this.speed = 70;
//        }
        this.speed = 20;
        
        if(keyIsDown(LEFT_ARROW)){
            paddle.moveLeft();
//            return true;
        }else if(keyIsDown(RIGHT_ARROW)){
            paddle.moveRight();
//            return true;
        }
        
        if(mouseIsPressed && mouseX<width/2){
            paddle.moveLeft();
//            return true;
        }else if(mouseIsPressed && mouseX>width/2){
            paddle.moveRight();
//            return true;
        }
    }
    
    this.score = function(){
        this.color = color(0,255,0);
        score++;
        this.width += 5;
    }
    
    this.hit = function(){
        this.color = color(255,0,0);
        lives--;
        this.width -= 10;
    }
    
    this.render = function(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        this.color = color(0);
    }
    
    this.moveRight = function(){
        this.x += this.speed;
        if(this.x + this.width > width){
            this.x = width - this.width;
        }
    }
    
    this.moveLeft = function(){
        this.x -= this.speed;
        if(this.x < 0){
            this.x = 0;
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}