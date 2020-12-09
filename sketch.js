
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,rect1,rect2,rect3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(200,450,20);

   ground = new Ground(0,680,800,20);

   rect1 = new Bin(650,600,20,100);
   rect2 = new Bin(650,660,200,20);
   rect3 = new Bin(780,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  
  rect1.display();
  rect2.display();
  rect3.display();

  paper.display();

  ground.display();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position,{x : 85, y : -85});
  }
}