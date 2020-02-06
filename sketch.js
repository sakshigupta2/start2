var bg, bgImg;
var b1, b2, b3, b4, b5, b6, b7, b8;
var ground, groundImg;
var moon, moonImg;
var mission, missionImg;
var target, targetImg;
var ufo, ufoImg;
var fire, fireImg;
var invisible, invisible2;
var comet, cometImg;
var gameState = "Start";
var score;
var sound1, sound2, sound3, sound4,sound5;
var wall, wall1;
var again, againImg;
var space, spaceImg;
var space2, spaceImg;
var click, clickImg;
var quote, quoteImg;
var lev2, lev2Img;
var party, partyImg;
var party2, party2Img;

function preload(){
  bgImg = loadImage("bg8.jpg");
  moonImg = loadImage("moon.png");
 // starImg = loadImage("star.png");
  b1Img = loadImage("Build 1.png");
  b2Img = loadImage("Build 5.png");
  b3Img = loadImage("Build 4.png");
  b4Img = loadImage("Build 1.png");
  b5Img = loadImage("Build 4.png");
  b6Img = loadImage("Build 5.png");
  b7Img = loadImage("Build 4.png");
  b8Img = loadImage("Build 5.png");
  missionImg = loadImage("tank2.png");
  targetImg = loadImage("t1.png");
  ufoImg = loadImage("mission.png");
  fireImg = loadImage("Fire 2.png");
  cometImg = loadImage("comet 3.png");  
  wall = loadImage("w2.jpg");
  againImg = loadImage("again.png");
  spaceImg = loadImage("space.png");
  clickImg = loadImage("click.png");
  quoteImg = loadImage("quote.webp");
  lev2Img = loadImage("level2.png");
  partyImg = loadImage("party.png");
  party2Img = loadImage("party2.png");

  sound1 = loadSound ("6.mp3");
  sound2 = loadSound ("2.mp3");
  sound3 = loadSound ("5.mp3");
  sound4 = loadSound ("4.mp3");
  sound5 = loadSound("1.mp3");
  
  
}

function setup() {
 var canvas = createCanvas (1500,600);
 wall1 = createSprite(750,350,10,10);
 wall1.addImage(wall);
 wall1.scale = 2.5;

    bg = createSprite(600,20,10,10);
    bg.addImage(bgImg);
    bg.scale = 2.7;   
    bg.visible = false;
    
    moon = createSprite(1300,150);
    moon.addImage(moonImg);
    moon.scale = 0.06;
    moon.visible = false;
    

    b1 = createSprite(100,550,10,10);
    b1.addImage(b1Img);
    b1.scale = 0.3;
    b1.visible = false;

    b2 = createSprite(280,550,10,10);
    b2.addImage(b2Img);
    b2.scale = 0.2;
    b2.visible = false;

    b3 = createSprite(420,550,10,10);
    b3.addImage(b3Img);
    b3.scale = 0.5;
    b3.visible = false;

    b4 = createSprite(1100,550,10,10);
    b4.addImage(b4Img);
    b4.scale = 0.3;
    b4.visible = false;

    b5 = createSprite(950,550,10,10);
    b5.addImage(b5Img);
    b5.scale = 0.5;
    b5.visible = false;

    b6 = createSprite(820,550,10,10);
    b6.addImage(b6Img);
    b6.scale = 0.2;
    b6.visible = false;

    b7 = createSprite(1250,550,10,10);
    b7.addImage(b7Img);
    b7.scale = 0.5;
    b7.visible = false;

    b8 = createSprite(1390,550,10,10);
    b8.addImage(b8Img);
    b8.scale = 0.2;
    b8.visible = false;

    mission = createSprite(600,570,10,10);
    mission.addImage(missionImg);
    mission.scale = 0.08;
    mission.visible = false;

    ufo = createSprite(300,100,10,10);
    ufo.addImage(ufoImg);
    ufo.scale = 0.15;
    ufo.visible = false;

    ufo1 = createSprite(700,100,10,10);
    ufo1.addImage(ufoImg);
    ufo1.scale = 0.2;
    ufo1.visible = false;

    ufo2 = createSprite(1100,100,10,10);
    ufo2.addImage(ufoImg);
    ufo2.scale = 0.15;
    ufo2.visible = false;

    invisible = createSprite(20,530,2,100);
    invisible.visible = false;
    invisible.visible = false;

    invisible2= createSprite(1480,530,10,100);
    invisible2.visible = false;
    invisible2.visible = false;
    
    comet = createSprite(200, 0);
    comet.addImage(cometImg);
    comet.scale = 0.4;
    comet.velocityY = 2.5;
    comet.visible = false;

    again = createSprite(700,300,10,10);
    again.addImage(againImg);
    again.scale = 0.7;
    again.visible = false;

   space = createSprite(1300,100,10,10);
   space.addImage(spaceImg);
   space.scale = 0.3;

   space2 = createSprite(200,100,10,10);
   space2.addImage(spaceImg);
   space2.scale = 0.3;

   click = createSprite(700,550,10,10);
   click.addImage(clickImg);
   click.scale = 0.5;

   quote = createSprite(700,200,10,10);
   quote.addImage(quoteImg);
   quote.scale = 0.5;
   quote.visible = false;

   lev2 = createSprite(700,500,10,10);
   lev2.addImage(lev2Img);
   lev2.scale = 0.4;
   lev2.visible = false;

   party = createSprite(300,250,10,10);
   party.addImage(partyImg);
   party.visible = false;
   party.scale = 0.5;

   party2 = createSprite(1200,400,10,10);
   party2.addImage(party2Img);
   party2.visible = false;
   party2.scale = 0.5;
  
   targetGroup = createGroup();

    score = 0;
    
} 


function draw() {
  background("blue");
 
 if (mousePressedOver(click)){
   gameState = "play";
 }
  if (gameState === "play"){
    

    bg.visible = true;
    moon.visible = true;
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;
    b5.visible = true;
    b6.visible = true;
    b7.visible = true;
    b8.visible = true;
    mission.visible = true;
    ufo.visible = true;
    ufo2.visible = true;
    ufo1.visible = true;
    invisible.visible = false;
    invisible2.visible = false;
    comet.visible = true;
    again.visible = false;
   space.visible = false;
   space2.visible = false;
  click.visible = false;
  quote.visible = false;
  lev2.visible = false;
  party.visible = false;
  party2.visible = false;

  if(keyDown("RIGHT_ARROW")){
    mission.velocityX =7;
    mission.velocityY =0;
  }
  if (keyDown("LEFT_ARROW")){
    mission.velocityX =-7;
    mission.velocityY =0;
  }

  if (keyWentDown("space")) {
    createSatellite(mission);
    sound3.play();
}



if (mission.isTouching(invisible)){
  mission.x = 600;
}

if (mission.isTouching(invisible2)){
  mission.x = 600;
}

if (targetGroup.isTouching(comet)) {
  if (frameCount % 10 === 0) {
     comet.destroy();
      comet = createSprite(Math.round(random(50, 1350), Math.round(random(-400, 0))));
      comet.addImage(cometImg);
      comet.scale = 0.4;
      comet.velocityY = 2.5;
      score = score + 200;
      sound5.play();
  }
}
 
if (comet.y > 530) {
  comet.x = Math.round(random(50, 1350));
  comet.y = 0;
}


if (comet.isTouching(b1)){
  b1.addImage(fireImg);
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b2)){
  b2.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b3)){
  b3.addImage(fireImg);
  sound1.play(); 
  gameState = "over"; 
}
if (comet.isTouching(b4)){
  b4.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b5)){
  b5.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b6)){
  b6.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b7)){
  b7.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}
if (comet.isTouching(b8)){
  b8.addImage(fireImg); 
  sound1.play();
  gameState = "over"; 
}



}
  if (gameState === "over"){
    comet.destroy();
    targetGroup.setVelocityXEach(0);
    invisible.visible = false;
    invisible2.visible = false;
  mission.visible = false;
 ufo.visible = false;
 ufo1.visible = false;
 ufo2.visible = false;
  again.visible = true;
  quote.visible = false;
  lev2.visible = false;
  }
 if(score === 2000){
    mission.visible = false;
  moon.visible = false; 
  ufo.visible = false;
  ufo1.visible = false;
   ufo2.visible = false;
   comet.destroy();
   b1.visible = false;
   b2.visible = false;
   b3.visible = false;
   b4.visible = false;
   b5.visible = false;
   b6.visible = false;
   b7.visible = false;
   b8.visible = false;
   quote.visible = true;
   lev2.visible = true;
   party.visible = true;
   party2.visible = true;
  }

drawSprites();
fill(rgb(26,95,141));
textSize(20);
text("HIGH SCORE: 2000",1230,50);

fill(rgb(26,95,141));
textSize(20);
text("Score: " + score, 150, 60);
  
}



function createSatellite() {
  var satellite = createSprite(100, 100, 5, 10);
  satellite.addImage(targetImg);
  satellite.y = 360;
  satellite.scale = 0.08;
  satellite.x = mission.x;
  satellite.velocityY = -5;
  satellite.lifetime = 1000;
  targetGroup.add(satellite);
}

