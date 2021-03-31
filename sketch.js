
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,ground,dustbin,dustbinimg,rightwall,leftwall;

function preload(){
  dustbinimg = loadImage("dustbin.png")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(150,530,75);

  ground = new Ground(600,570,1200,20);

  rightwall = new Dustbin(1000,500,10,120);
  leftwall = new Dustbin(1110,500,10,120);

  dustbin = createSprite(1050,470,130,160);
  dustbin.addImage(dustbinimg);
  dustbin.scale = 0.55  

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  Engine.update(engine);

  paper.display();
  ground.display();
  rightwall.display();
  leftwall.display();
  
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-160});
  }
}