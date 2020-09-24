const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//All the variables
var engine,world;

var ground1,ground2,ground3;

var slingShot,polygon_img;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15;
var block16,block17,block18,block19,block20,block21,block22; 

var  bg = "Images/Morning.jpg";

var backgroundImg;

var score = 0 

function preload(){
  getBackground();
}

function setup () {
  createCanvas(1535,750);
     
  engine = Engine.create();
  world = engine.world;

  // Polygon creation
  this.polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)

 // Ground bodies
 ground1 = new Ground(1190,350,250,20)
 ground2 = new Ground(790,600,350,20)
 ground3 = new Ground(767,725,1535,20)

 // Slingshot body 
 slingShot = new SlingShot(this.polygon,{x:170,y:440})

 // Level 1 of Ground 1 
 block1 = new Box(680,375,50,50);
 block2 = new Box(735,375,50,50);
 block3 = new Box(790,375,50,50);
 block4 = new Box(845,375,50,50);
 block5 = new Box(900,375,50,50);

 // Level 2 of Ground 1 
 block6 = new Box(700,270,50,50);
 block7 = new Box(758,270,50,50);
 block8 = new Box(815,270,50,50)
 block9 = new Box(870,270,50,50);

 // Level 3 of Ground 1 
 block10 = new Box(720,150,50,50);
 block11 = new Box(785,150,50,50);
 block12 = new Box(850,150,50,50);

 // Level 4 of Ground 1 
 block13 = new Box(745,90,50,50);
 block14 = new Box(815,90,50,50);

 // Level 5 of Ground 1 
 block15 = new Box(778,10,50,50);

 // Levels of Ground 2 
 block16 = new Box(1120,40,50,50);
 block17 = new Box(1190,40,50,50);
 block18 = new Box(1190,30,50,50);
 block19 = new Box(1120,30,50,50);
 block20 = new Box(1262,20,50,50);
 block21 = new Box(1262,10,50,50);
 block22 = new Box(1200,5,200,30);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);  

  ground1.display();
  ground2.display();
  ground3.display();

  slingShot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();

  block6.score();
  block7.score();
  block8.score();
  block9.score();

  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();

  block15.score();

  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();


  
  drawSprites();


  textSize(30)
  text("Score "+score,1300,80);
}

// Functions of mouseDragged and mouseReleased 

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x : mouseX, y : mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackground(){
  console.log("Response from getBackground : ");
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata');
  console.log(response);
  var responseJson= await response.json();
  console.log(responseJson);
  var dateTime = responseJson.datetime
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<=19){
  bg = "Images/Morning.jpg"
  }

  else{
      bg = "Images/Night.jpg"
  }

  backgroundImg = loadImage(bg);
}