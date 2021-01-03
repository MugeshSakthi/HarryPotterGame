var PLAY=0;
var END=1;
var harry,harryImg;
var hogwarts;
var wall1;
var wall2;
var defeatWall;
var malfoy,malfoyImg,malfoyGroup;
var fennir,fennirGroup,fennirImg;
var dolohov,dolohovImg,dolohovGroup;
var bellatrix,bellatrixImg,bellatrixGroup;
var bartyCrouch,bartyCrouchImg,bartyCrouchGroup;
var ray,rayGroup;
var score=0;
var start,startImg;
var deathEaters;
var voldemort,voldemortImg;

function preload(){
 
  harryImg=loadImage("harryPotter.jpg");
  hogwarts=loadImage("hogwarts.jpg")
  malfoyImg=loadImage("malfoy.jpg");
  fennirImg=loadImage("fennirGreyback.jpg");
  bellatrixImg=loadImage("BellatrixLestrange.png");
  dolohovImg=loadImage("Dolohov.png");
  bartyCrouchImg=loadImage("BartyCrouchJr.jpg");
  deathEatersImg=loadImage("DeathEaters.jpg");
  startImg=loadImage("Start.jpg")
  voldemortImg=loadImage("voldemort smiling.jpg")
  
}

function setup() {
  createCanvas(500, 500);
  
  //score=0;
  
  wall1=createSprite(25,250,50,500);
 
  wall2=createSprite(475,250,50,500);
  
  defeatWall=createSprite(250,510,500,30);
  
  harry=createSprite(250,450,20,20);
  harry.addImage(harryImg);
  harry.scale=0.12;

  
  
  malfoyGroup=new Group();
  
  fennirGroup=new Group();
  
  dolohovGroup=new Group();
  
  bellatrixGroup=new Group();
  
  bartyCrouchGroup=new Group();
  
  rayGroup=new Group();  
  
  
  gameState=PLAY;
  
}

function draw() {
  
  
  background("red");
  
  wall1.visible=false;
  
  wall2.visible=false;
  
  defeatWall.visible=false;
  
  

  
//if(gameState===INTRODUCTION){
     
     //background(deathEaters);
  
  //start=createSprite(240,450);
  //start.addImage(startImg);
  //start.scale=0.3;
  
  //harry.visible=false;
  
    //fill("lightGreen") 
    
    //text("Voldemort and Death Eaters have came alive and are attacking Hogwarts",25,50);
    
   //fill("lightGreen") 
    
    //text("None of the Hogwarts wizards and witchs are able to defend Hogwarts",25,100);
     
  
  //fill("lightGreen") 
    
    //text("This time Voldemort multiplied five of his death Eaters Infinitely",25,150);
    
  //fill("lightGreen") 
    
    //text("Harry need your help to Defend Hogwarts",25,200);
     
  //fill("lightGreen");
  
  //text("Press space to attack and use arrows to move to right and left",25,250);
  
  //fill("lightGreen");
  
  //text("Remember you are the only and last hope of hogwarts",25,300);
  
  //fill("lightGreen");
  
  //text("Even if you let one death Eater into hogwarts ,then //hogwarts will be destroyed",25,350);
  
  
  

  
       
//}
  
  if(gameState===PLAY){
  
  background(hogwarts);
  
    spawnMalfoy();
  spawnFennir();
  spawnBellatrix();
  spawnDolohov();
  spawnBartyCrouchJr();
   
   
    if(keyDown("space") ){
  spawnray();
     }
  
  if(keyDown("left_arrow")){
     harry.x=harry.x-3;
     }
  
  if(keyDown("right_arrow")){
     harry.x=harry.x+3;
     } 
   
  fill("yellow");
  textSize=7;
  text("Score:"+score,425,35);
    
   fill("yellow");
   text("Don't let",425,45); 
  
    fill("yellow");
   text("Harry touch",425,55);
    
    fill("yellow");
   text("any Death",425,65);
    
    fill("yellow");
   text("Eater",425,75);
    
  if(harry.isTouching(wall1)){
     harry.bounceOff(wall1);
     }
  
  if(harry.isTouching(wall2)){
     harry.bounceOff(wall2);  
     }
  
  

   //if(score>0 && score%50===0){
      
      //malfoyGroup.velocityY=malfoyGroup.velocityY+2;
      //fennirGroup.velocityY=malfoyGroup.velocityY+2;
      //dolohovGroup.velocityY=malfoyGroup.velocityY+2;
      //bartyCrouchGroup.velocityY=malfoyGroup.velocityY+2;
      //bellatrixGroup.velocityY=malfoyGroup.velocityY+2;
     
      //}
    
    if(score>0 && score/50===0){
      
      malfoyGroup.velocityY=malfoyGroup.velocityY+2;
      fennirGroup.velocityY=malfoyGroup.velocityY+2;
      dolohovGroup.velocityY=malfoyGroup.velocityY+2;
      bartyCrouchGroup.velocityY=malfoyGroup.velocityY+2;
      bellatrixGroup.velocityY=malfoyGroup.velocityY+2;
      
      
       }
  
  if(rayGroup.isTouching(malfoyGroup)){
     malfoyGroup.destroyEach();
     score=score+2;
     }
  
  if(rayGroup.isTouching(fennirGroup)){
     fennirGroup.destroyEach();
     score=score+2;
     }
  
  if(rayGroup.isTouching(bellatrixGroup)){
     bellatrixGroup.destroyEach();
     score=score+2;
     }
  
  if(rayGroup.isTouching(bartyCrouchGroup)){
     bartyCrouchGroup.destroyEach();
     score=score+2;
     }
  
  if(rayGroup.isTouching(dolohovGroup)){
     dolohovGroup.destroyEach();
     score=score+2;
     }
      
 }
  
  if(gameState===END){
     
    background("darkGreen");
    
    harry.visible=false;
    malfoyGroup.destroyEach();
    fennirGroup.destroyEach();
    dolohovGroup.destroyEach();
    bartyCrouchGroup.destroyEach();
    bellatrixGroup.destroyEach();
    
    deathEaters=createSprite(100,250);
    deathEaters.addImage(deathEatersImg);
    
    voldemort=createSprite(400,400);
    voldemort.addImage(voldemortImg);
    voldemort.scale=0.4;
    
    fill("yellow");
    text("You have Failed to protect harry and the world",50,50);
    
    fill("yellow");
    text("Now voldemort destroyed hogwarts",50,100);
    
    fill("yellow");
    text("Sorry to tell this but the World is now defenceless and Voldemort captured the world",50,150);
    
        fill("yellow");
    text( "Now there is no defence against voldemort in the world",50,170);
    
    fill("red");
    textFont("algerian");
    text("THE END OF THE WORLD",100,350);
    

    
    
     }
  
if(malfoyGroup.isTouching(defeatWall) || fennirGroup.isTouching(defeatWall) ||
  dolohovGroup.isTouching(defeatWall) ||
bellatrixGroup.isTouching(defeatWall) ||
bartyCrouchGroup.isTouching(defeatWall) || 
  harry.isTouching(malfoyGroup) ||
 harry.isTouching(fennirGroup) ||
  harry.isTouching(dolohovGroup) || 
  harry.isTouching(bartyCrouchGroup) ||
  harry.isTouching(bellatrixGroup)){
         
     gameState=END;
         
     }

  drawSprites();
}
  
  function spawnMalfoy(){
  if(frameCount%100===0){
  malfoy=createSprite(15,-50);
  malfoy.addImage(malfoyImg);  
  malfoy.x=Math.round(random(89,100))
  malfoy.scale=0.08;
  malfoy.velocityY=2;
  malfoyGroup.add(malfoy);
  malfoy.lifeTime=200;
  }
}
  


function spawnFennir(){
  if(frameCount%200===0){
    fennir=createSprite(120,-90);
    fennir.addImage(fennirImg);
    fennir.x=Math.round(random(120,200));
    fennir.scale=0.2;
    fennir.velocityY=2;
    fennirGroup.add(fennir);
    fennir.lifeTime=200;
  }
  
}

function spawnBellatrix(){
  if(frameCount%300===0){
     bellatrix=createSprite(220,-120);
     bellatrix.addImage(bellatrixImg);
     bellatrix.x=Math.round(random(220,300));
     bellatrix.scale=0.08;
     bellatrix.velocityY=2;
     bellatrixGroup.add(bellatrix);
     bellatrix.lifeTime=200;
     }
}

function spawnDolohov(){
  if(frameCount%400===0){
     dolohov=createSprite(320,-150);
     dolohov.addImage(dolohovImg);
     dolohov.x=Math.round(random(320,400));
     dolohov.scale=0.1;
     dolohov.velocityY=2;
     dolohovGroup.add(dolohov);
     dolohov.lifeTime=200;
     }
  
  
  
}

function spawnBartyCrouchJr(){
  if(frameCount%500===0){
  bartyCrouch=createSprite(400,-180);
  bartyCrouch.addImage(bartyCrouchImg);
  bartyCrouch.x=Math.round(random(400,411));
  bartyCrouch.scale=0.1;
  bartyCrouch.velocityY=2;
  bartyCrouchGroup.add(bartyCrouch)
  bartyCrouch.lifeTime=200;
}
  
}

function spawnray(){
  
  ray=createSprite(250,400,3,90);
  ray.shapeColor="green";
  ray.velocityY=-3;
  ray.x=harry.x;
  rayGroup.add(ray);
  ray.lifeTime=200;
  
}