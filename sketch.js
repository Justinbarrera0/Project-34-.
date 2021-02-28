const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world;
var ground;
var backgroundImg;
var hero;
var fly;
function preload() {
//preload the images here
backgroundImg=loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1200, 800);
  // create sprites here
engine=Engine.create()
world=engine.world
ground=new Ground(600,700,1200,20)
hero=new Hero(200,400,150)
fly=new Fly(hero.body,{x:100,y:50})
}

function draw() {
  background(backgroundImg);
Engine.update(engine)
ground.display()
hero.display()
//fly.display()
}

function mouseDragged (){
Matter.Body.setPosition(hero.body,{ x:mouseX ,y:mouseY})

}