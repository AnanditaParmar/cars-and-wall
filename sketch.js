var car,wall;
var speed,weight;
var def;

function setup() {
  createCanvas(1200,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1100,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background("black");
  if(car.collide(wall))
  {
    def=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if(def<100)
    {
      car.shapeColor="green";
    }
    if(def>=100&&def<180)
    {
      car.shapeColor="yellow";
    }
    if(def>=180)
    {
      car.shapeColor="red";
    }
  }  
  drawSprites();
}