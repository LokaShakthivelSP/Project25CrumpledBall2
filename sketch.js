
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var img;

function preload(){
	img=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall=new Paper();
	ground=new Ground();

	boxLeft=new Box(880,480,20,150);
	boxRight=new Box(1040,480,20,150);
	boxBottom=new Box(960,550,180,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  noStroke();
  imageMode(CENTER);

  Engine.update(engine);

  ground.display();  
  boxRight.display();
  boxBottom.display();
  boxLeft.display();
  paperBall.display();
  
  image(img,boxBottom.body.position.x,boxBottom.body.position.y-90,200,200);

  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paperBall.body,paperBall.body.position,{x:125,y:-125});
	}
}


