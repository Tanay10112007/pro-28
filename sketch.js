
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stone,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world, boy, engine;

//Declare launcherObject and launchForce variable here


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,100); 
  
	mango1=new Mango(1100,100,30,30);
  mango2=new Mango(1170,130,30,30);
	mango3=new Mango(1010,140,30,30);
	mango4=new Mango(1000,70,30,30);
	mango5=new Mango(1100,70,30,30);
	mango6=new Mango(1000,230,30,30);
	mango7=new Mango(900,230,40,30);
	mango8=new Mango(1140,150,40,30);
	mango9=new Mango(1100,230,40,30);
	mango10=new Mango(1200,200,40,30);
	mango11=new Mango(1120,50,40,30);
	mango12=new Mango(900,160,40,30);
  
	treeObj=new Tree(1050,400,400,400);
	groundObject=new Ground(750,600,1300,20);

  //create launcherObject here
    string = new String(stone.body,{x:235,y:420});

	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  
  // display launcher object here
    


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
}

treeObj.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  groundObject.display();
//create mouseDragged function here

function mouseDragged(){
  Matter.body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
//create mouseReleased function here
function mouseReleased(){
  attach.fly();
}

//create keyPressed function here
    function keyPressed(){
      if(keyCode === 32){
        Matter.body.setPosition(stone.body,{x:235, y:420});
        string.attach(stone.body);
      }
    }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }