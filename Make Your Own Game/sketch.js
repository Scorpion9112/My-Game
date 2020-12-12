
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var score
var gameState="captured"
var h1
function preload()
{
	guard1=loadImage("guard.png")
	hostage1=loadImage("hostage.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	Engine.run(engine);
	g1= new Ground(windowWidth/2,windowHeight-10,windowWidth,20)
	g2= new Ground(windowWidth/2,10,windowWidth,20)
	g3= new Ground(windowWidth-10,windowHeight/2,20,windowHeight)
	g4= new Ground(windowWidth-windowWidth+10,windowHeight/2-110,20,windowHeight+15)
	p1= new Player(windowWidth/2,windowHeight/2)
	g5= new Ground(windowWidth-windowWidth+135,windowHeight-112.5,230,20)
	g6= new Ground(windowWidth-windowWidth+260,windowHeight-190,20,175)
	g7= new Ground(windowWidth-windowWidth+360,windowHeight-100.5,20,161.5)
	pl1=createSprite(windowWidth/2,windowHeight/2,60,80)
	gr1=createSprite(windowWidth/2,windowHeight-10,windowWidth,20)
	ga1=createSprite(windowWidth/2+100,windowHeight/2,20,20)
	
	score=0
}


function draw() {
  background(0);
 g1.display()
 g2.display()
 g3.display()
 g5.display()
 g4.display()
 p1.display()
 g6.display()
 g7.display()
pl1.visible=false
gr1.visible=false
ga1.addImage(guard1)
ga1.scale=.25
pl1.x=p1.body.position.x
pl1.y=p1.body.position.y
pl1.bounceOff(gr1)
if (gameState==="captured"){
	h1=createSprite(windowWidth-100,windowHeight-windowHeight-50,20,20)
	h1.addImage(hostage1)
    h1.scale=.25
}
if(pl1.isTouching(h1)&&gameState==="captured"){
	console.log("You got him!!👍👍👍😃")
	score=score+500
	h1.destroy()
	gameState="free"
}
if(pl1.isTouching(ga1)){
gameState="captured"
console.log("You can do better.🙎‍♂️🙎‍♂️")
Matter.Body.setPosition(p1.body,{x:500,y:200})
score=0

}

 text("MouseX: "+mouseX,20,45)
 text("MouseY: "+mouseY,20,60)
 text("Score:"+score,windowWidth/2,windowHeight-windowHeight+30)
 if(keyDown("w")){
	Matter.Body.setStatic(p1.body,false)
	Matter.Body.applyForce(p1.body,p1.body.position,{x:0,y:-15})
}
if(keyDown("d")){
	Matter.Body.setStatic(p1.body,false)
	Matter.Body.applyForce(p1.body,p1.body.position,{x:5,y:0})
}
if(keyDown("a")){
	Matter.Body.setStatic(p1.body,false)
	Matter.Body.applyForce(p1.body,p1.body.position,{x:-5,y:0})
}
console.log(pl1.velocityX)
drawSprites()
}
  
   
function detect(object1,object2){
	  var distance=dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y)
		if (distance<=object1.r+object2.r){
			Body.setStatic(object2.body,false)
			console.log(object1)
		}
		
  }


