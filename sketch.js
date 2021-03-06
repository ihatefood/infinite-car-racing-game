var score=0;
var car1img, car2img, car3img, carimg4,police_carimg;
var player, car1,


 gameState = "start";

var track;
var play,playimg;
var  wall1,wall2;
var carG;
var coinG;

var out;
var highscore =0;
var reset;
var coin=0;
var coins,coinimg;

var info;
function preload(){


car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");
groundImg = loadImage("images/ground.png");
track1img = loadImage("images/track.jpg");
track2img = loadImage("images/track.png");
police_carimg = loadImage("images/police_car.png");
playimg = loadImage("images/play.png")
coinimg = loadImage("images/coin.png");




}
function setup(){
  canvas = createCanvas(1350, 560);

  //creating groups
carG = new Group();
coinsG = new Group();

//track
track = createSprite(670,305);
track.addImage(track2img);
track.scale=1.9

//player
  player = createSprite( 675,490,60,60);
  player.addImage(car2img)
  player.scale=1.8;
  
  //play button
play = createSprite(670,300);
play.addImage(playimg);
play.scale=0.3;

//boundary for player
wall1 = createSprite(200,300,10,600);
wall2 = createSprite(1144,300,10,600)
 


}


function draw(){
background(200)




//invisible  walls
player.collide(wall1);
player.collide(wall2);


//scrolling bg
track.velocityY = 8;
if (track.y>600 ){
  track.y = height/10;
}

//gamestate start
if(gameState === "start"){


  //change gamestate from button
  if(mousePressedOver(play)){
    play.destroy();
    gameState = "play";
  }
 
}



if(gameState === "play"){


  // player movements

   if(keyDown(LEFT_ARROW)){
     player.x = player.x - 12;
    
   }

   if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 12;
   

  }

  //score system
  if(frameCount%6===0){
    score=score+1;
  }


  //end game condition
  if(player.isTouching(carG )){
    gameState = "end";

  }

  // coin system
if(player.isTouching(coinsG)){
coin = coin+1

}
  //spawncars
  spawnCars();

  //spawncoins
  spawnCoins();
}

 //end stage
if(gameState == "end"){
 carG.setVelocityEach = 0,0;
 track.velocityY=0;
 player.position.y = 700
  
//reset  = createSprite(670,300,130,70);
//reset.shapeColor = "lime";

//if(mousePressedOver(reset)){
//gameState = "start"
//}

}

;



 
drawSprites();

//text stuff
fill("cyan")
textSize(30)
text("distance: " + score + "m",40,50);
fill("yellow")
text("coins: " + coin ,40,100);


}


function spawnCars(){
  
//car1
if(World.frameCount%200===0){
  car1=createSprite(Math.round(random(220,1100)),-60)
  car1.addImage(car1img)
  car1.velocityY = 5 +frameCount/40
  car1.scale=1.7
  car1.rotation = 180
 carG.add(car1)
 }
 
 
 //car2
 if(World.frameCount%150===0){
   car2=createSprite(Math.round(random(220,1100)),-60)
   car2.addImage(car3img)
   car2.velocityY = 5 +frameCount/40
   car2.scale=1.7
   car2.rotation = 180
  carG.add(car2)
  }
 
  //car3
  if(World.frameCount%120===0){
   car3=createSprite(Math.round(random(220,1100)),-60)
   car3.addImage(car4img)
   car3.velocityY = 5 +frameCount/40
   car3.scale=1.7
   car3.rotation = 180
  carG.add(car3)
  }
 
  //car4
  if(World.frameCount%160===0){
   car4=createSprite(Math.round(random(220,1100)),-60)
   car4.addImage(police_carimg)
   car4.velocityY = 5 +frameCount/40
   car4.scale=0.27
   car4.rotation = 90
 carG.add(car4)
  
  }

}


function spawnCoins(){

  //coins
  if(World.frameCount%150===0){
    coins=createSprite(Math.round(random(220,1100)),-60,);
    coins.addImage(coinimg);
   coins.velocityY = 5 +frameCount/40;
   coins.scale = 0.03;
 
  coinsG.add(coins)
}
}