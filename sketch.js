var tree1 ,boy1,m1,m2,m3,m4,m5,m6,m7,stone1,rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new tree(900,400,800,100);
	boy1= new boy(300,500,400,400);
	m1=new mango(920,300,100,100);
	stone1=new stone(180,300,100,100);
	rope1=new rope(boy1.body,stone1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree1.display();
  boy1.display();
  m1.display();
  stone1.display();
  rope1.display();
  drawSprites();
 
}



