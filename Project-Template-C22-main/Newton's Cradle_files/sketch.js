const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		restitution:0.8
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(400,200,10,ball_options);
	World.add(world,ball);

	ball1 = Bodies.circle(420,200,10,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(440,200,10,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(460,200,10,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(480,200,10,ball_options);
	World.add(world,ball4);

	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.25

	})
	World.add(world,con);

	con1 = Matter.Constraint.create({
		pointA:{x:420,y:100},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.25

	})
	World.add(world,con1);


	con2 = Matter.Constraint.create({
		pointA:{x:440,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.25

	})
	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:460,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.25

	})
	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:480,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.25

	})
	World.add(world,con4);


	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
	
  
}

function draw() {
  
  background(51);
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);
ellipse(ball.position.x,ball.position.y,10);
ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,10);
ellipse(ball3.position.x,ball3.position.y,10);
ellipse(ball4.position.x,ball4.position.y,10);
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  

  pop();

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode==RIGHT_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
	
}