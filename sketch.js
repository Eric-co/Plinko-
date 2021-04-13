
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function preload(){

}






function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,690,800,200);

  for (var i = 0; i<=width; i=+80) {
    divisions.push(new Divisions(i,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var j = 75; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j= 50; j<width; j = j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j= 50; j<width-10; j = j+50) {
    plinkos.push(new Plinko(j,375));
  }


  Engine.run(engine);

  createSprite(400, 200, 50, 50);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  for (var n= 0; n<division.length; n++) {
     divisions[n].display();
  }

  if (frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }

  for (var h= 50; h<particles.length; h++) {
    particles[h].display();
  }
  
  for (var j= 50; j<particles.length; j++) {
    particles[j].display();
  }



  ground.display();

}