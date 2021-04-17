var canvas, backgroundImage;

var gameState = 0;


var form, player, game;
var gem1,gem2,gem3,gem4,gem5,gem6,gem7,gem8, gun1;
var bulletGroup,bullet;
var player1;
var g;
var track, player1_img;
var enemyGroup;
var c;
var bolg;

function preload(){
 backgroundImage = loadImage("images/background.png");
  player1_img = loadAnimation("images/w1(1).png","images/w1(2).png","images/w1(3).png");
 
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth * 2, displayHeight * 2);
// backgroundImage.scale=2;
  player1 = createSprite(100,200);
  player1.addAnimation("player1Running",player1_img);
  gem1=createSprite(displayWidth-30,displayHeight-220, 40, 40);
  gem2=createSprite(1940,650, 40, 40);
  gem3=createSprite(2780,120, 40, 40);
  gem4=createSprite(2350,1310, 40, 40);
  gem5=createSprite(2050,1310, 40, 40);
  gem6=createSprite(1090,1140, 40, 40);
  gem7=createSprite(1180,1680, 40, 40);
  gem8=createSprite(1510,1680, 40, 40);
  bulletGroup=new Group();
  enemyGroup=new Group();
  c=0;
  bolg=new Group();
}


function draw(){
  background(backgroundImage,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

  
 
       // console.log(player1.x,player1.y);

    if(keyIsDown(UP_ARROW) ){
      player1.y-=10
      player1.rotation=0;
      c=1;
    }
    if(keyIsDown(DOWN_ARROW)){
      player1.y +=10
      player1.rotation=180;
      c=2;
      
    }
    if(keyIsDown(LEFT_ARROW) ){
      player1.x -=10
      player1.rotation=270;
      c=3;
    
    }
    if(keyIsDown(RIGHT_ARROW) ){
      player1.x +=20
      player1.rotation=90;
      c=4;
    }

   
   if(keyWentDown("space")&&c===1){
     Bullet();
 bulletGroup.setSpeedAndDirectionEach(8,270);
 bulletGroup.remove(bullet);

   }
   if(keyWentDown("space")&&c===2){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,90);
bulletGroup.remove(bullet);

  }   if(keyWentDown("space")&&c===3){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,180);
bulletGroup.remove(bullet);

  }   if(keyWentDown("space")&&c===4){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,0);
bulletGroup.remove(bullet);

  }

   
   if(player1.isTouching(gem1)){
    
    gem1.visible=false;
   
   }

   if(player1.isTouching(gem2)){
    
    gem2.visible=false;
   
   }

   if(player1.isTouching(gem3)){
    
    gem3.visible=false;
   
   }

   if(player1.isTouching(gem4)){
    
    gem4.visible=false;
   
   }

   if(player1.isTouching(gem5)){
    
    gem5.visible=false;
   
   }

   if(player1.isTouching(gem6)){
    
    gem6.visible=false;
   
   }

   if(player1.isTouching(gem7)){
    
    gem7.visible=false;
   
   }

   if(player1.isTouching(gem8)){
    
    gem8.visible=false;
   
   }
   if (player1.x>=enemyGroup.x-100 || player1.x<=enemyGroup.x+100){
     enemyGroup.velocityX-=3;
     enemyGroup.velocityY-=3;
   }
   Bullet();
  Enemy();

 

    drawSprites();
    player1.x=camera.position.x ;
player1.y=camera.position.y;
  }
   
  function Bullet (){
    bullet=createSprite(10,10,20,20);
    bullet.shapeColor= "yellow";
    bullet.x=player1.x;
    bullet.x=bullet.x+8;
    bullet.y=player1.y;
    bolg.add(bullet);
    bulletGroup.add(bullet);
    bullet.lifetime=200;
    }
  function Enemy(){
    if (frameCount%100===0){
      var enemy =createSprite(random(0,1200),random(0,1200),60,60)
      enemy.shapeColor="red";
      enemy.velocityX=(random(-3,3));
      enemy.velocityY=(random(-3,3));
      enemy.lifetime=5000;
enemyGroup.add(enemy);
    }
  }

 

