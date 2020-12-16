const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground, stand1, stand2, striker, chain, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, hexagon, chain;

function setup() {
  createCanvas(1280,610);
  engine = Engine.create();
  world = engine.world;

  stand1 = new Stand(1100, 300, 300, 30);
  stand2 = new Stand(690, 400, 450, 30);
  block1 = new Bluebox(1000, 150, 50, 70);
  block2 = new Bluebox(1050, 150, 50, 70);
  block3 = new Bluebox(1100, 150, 50, 70);
  block4 = new Bluebox(1150, 150, 50, 70);
  block5 = new Bluebox(1200, 150, 50, 70);
  block6 = new Pinkbox(1050, 100, 50, 70);
  block7 = new Pinkbox(1100, 100, 50, 70);
  block8 = new Pinkbox(1150, 100, 50, 70);
  block9 = new Redbox(1100, 50, 50, 70);
  block10 = new Redbox(540, 350, 50, 70);
  block11 = new Redbox(590, 350, 50, 70);
  block12 = new Redbox(640, 350, 50, 70);
  block13 = new Redbox(690, 350, 50, 70);
  block14 = new Redbox(740, 350, 50, 70);
  block15 = new Redbox(790, 350, 50, 70);
  block16 = new Redbox(840, 350, 50, 70);
  block17 = new Bluebox(590, 300, 50, 70);
  block18 = new Bluebox(640, 300, 50, 70);
  block19 = new Bluebox(690, 300, 50, 70);
  block20 = new Bluebox(740, 300, 50, 70);
  block21 = new Bluebox(790, 300, 50, 70);
  block22 = new Pinkbox(640, 250, 50, 70);
  block23 = new Pinkbox(690, 250, 50, 70);
  block24 = new Pinkbox(740, 250, 50, 70);
  block25 = new Box(690, 200, 50, 70);

  hexagon = new Striker(100, 305, 6, 90);
  chain = new Chain(hexagon.body, {x: 200, y: 300});
  ground = new Stand(width/2, height-10, width, 30);
}

function draw() {
  background("lime");
  Engine.update(engine);
  stand1.display();
  stand2.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  hexagon.display();
  chain.display();

  textSize(30);
  fill("maroon");
  text("Drag the mouse to find the perfect shot and release the mouse to launch", 200, 50);
  text("Press space for another turn", 500, 100);
}

function mouseDragged() {
  Body.setPosition(hexagon.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    chain.attach();
  }
}