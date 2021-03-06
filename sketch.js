
var tom, jerry
var garden

var tomImg1, jerryImg1
var tomImg2, jerryImg2
var tomImg3, jerryImg3
var gardenImg



    function preload(){
        gardenImg = loadImage("images/garden.png");
        tomImg1 = loadAnimation("images/cat1.png");
        tomImg2= loadAnimation("images/cat2.png", "images/cat3.png");
        tomImg3 = loadAnimation("images/cat4.png");
        
        jerryImg1 = loadAnimation("images/mouse4.png");
        jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
        jerryImg3 = loadAnimation("images/mouse1.png");
        
        
      }
      


function setup(){
    createCanvas(1000,800);
    // Moving background
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    
    tom = createSprite(670,600);
    tom.addAnimation("tom_standing", tomImg1);
    tom.scale=0.2;

    jerry = createSprite(150,600);
    jerry.addAnimation("jerry", jerryImg1)
    jerry.scale = 0.1;

}


function draw() {
    background(0);
  
    //if(jerry.isTouching(tom)){
    //    tom.changeAnimation("tomCollided", tomImg3)
    //   tom.velocityX = 0;
    //   jerry.changeAnimation(jerryImg1);
    //}

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("tom_collided", tomImg3)
        tom.changeAnimation("tom_collided");
        tom.velocityX = 0;
        jerry.addAnimation("jerry_collided", jerryImg3)
        jerry.changeAnimation("jerry_collided");    }


    

      


    drawSprites();
    textSize(20);
    fill(255);
}

function keyPressed(){

    if(keyCode === LEFT_ARROW) { 
        tom.velocityX = -5;
        tom.addAnimation("tom_running", tomImg2)
        tom.changeAnimation("tom_running");
        
        
      }

      if(keyCode === RIGHT_ARROW) { 
        jerry.addAnimation("jerry_teasing", jerryImg2)
        jerry.changeAnimation("jerry_teasing");
        jerry.frameDelay = 10;

        tom.addAnimation("tom_sitting", tomImg1)
        tom.changeAnimation("tom_sitting");
      }

}



   
