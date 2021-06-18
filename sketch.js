
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,rock,tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,sling,ground1;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new stone(320,225);

	sling= new SlingShot(stone.body,{x:320 , y:225});
	mango1 = new mango(900,150,8);
	mango2 = new mango(950,120,10);
	mango3 = new mango(1000,100,7);
	mango4 = new mango(950,60,9);
	mango5 = new mango(1050,60,6);
	mango6 = new mango(1100,120,10);

	ground1 = new Ground(1280,400,2700,70) ; 
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}


function draw() {
	

    background("black");
	
    drawSprites();

    imageMode(CENTER);
   
	image(boy,400,300,250,300);
	image(tree,1000,180,400,400);

	stone.display();
	sling.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	ground1.display() ;

	collision(stone,mango1);
	collision(stone,mango2);
	collision(stone,mango3);
	collision(stone,mango4);
	collision(stone,mango5);
	collision(stone,mango6);

	
	
}

function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}


