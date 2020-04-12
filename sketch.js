const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,100,240,50);
    ball = Bodies.circle(300,200,50);
    World.add(world, ball);
    var ope = {
    bodyA:ball,bodyB:box1.body,stiffness:0.04,length:100
    }
    str = Matter.Constraint.create(ope);
    World.add(world, str);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("red");
    ellipse(ball.position.x,ball.position.y,50,50);
    box1.display();
    line(ball.position.x,ball.position.y,box1.body.position.x,box1.body.position.y);
}
