
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var d1,d2,d3
var paper
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(width/2,670,width,20)
d1 = new Ground(1200,605,20,100)
d2 = new Ground(1300,650,200,20)
d3 = new Ground(1400,605,20,100)

paper = new Paper(200,450,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  d1.display()
  d2.display()
  d3.display()
  paper.display()
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
}	
}


