
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);
	 
	engine = Engine.create();
	world = engine.world;

    
	//Create the Bodies Here.

	ground = new Ground(400,500,width,20);
	dustbin1 = new Dustbin(650,478,150,20);
	dustbin2 = new Dustbin(570,415,20,150);
	dustbin3 = new Dustbin(725,415,20,150);
	paper = new Paper(100,400,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

