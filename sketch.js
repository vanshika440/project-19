var path,boy,cash,diamonds,jewellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelleryImg,swordImg;
var treasureCollection = 0;
var cash_,diamonds_,jewellery_,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("boyRunning",boyImg);
boy.scale=0.08;
  
  
cash_=new Group();
diamonds_=new Group();
jewellery_=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJewellery();
    createSword();

    if (cash_.isTouching(boy)) {
      cash_.destroyEach()
      treasureCollection=treasureCollection+50}
    
    else if (diamonds_.isTouching(boy)) {
      diamonds_.destroyEach()
      (treasureCollection=treasureCollection+100)}
      
     else if(jewellery_.isTouching(boy)) {
      jewellery_.destroyEach()
      (treasureCollection= treasureCollection + 150)}
      
     else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("boyRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cash_.destroyEach();
        diamonds_.destroyEach();
        jewellery_.destroyEach();
        swordGroup.destroyEach();
        
        cash_.setVelocityYEach(0);
        diamonds_.setVelocityYEach(0);
        jewellery_.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites()
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30)
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50,width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cash_.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50,width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamonds_.add(diamonds);
}
}

function createJewellery() {
  if (World.frameCount % 410 == 0) {
  var jewellery = createSprite(Math.round(random(50,width-50),40, 10, 10));
  jewellery.addImage(jewelleryImg);
  jewellery.scale=0.13;
  jewellery.velocityY = 3;
  jewellery.lifetime = 150;
  jewellery_.add(jewellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50,width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}