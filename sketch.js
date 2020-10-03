var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  //speed=90
  //weight=1500

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  //bullet
  bullet=createSprite(50,200,50,15);

  //wall
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  //give speed to car
  bullet.velocityX=speed;


}

function draw() {
  background(0); 

    if(hascollided(bullet,wall)){
      
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  
    if(damage>=10){
    wall.shapeColor=color(255,0,0);
  }
  }
 
  /*if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  
    if(damage>=10){
    wall.shapeColor=color(255,0,0);
  }
    console.log(damage);
}
 */

  drawSprites();
}


function hascollided(obj1,obj2){

  obj1Right=obj1.x+obj1.width/2;
  obj2Left=obj2.x-obj2.width/2;

  if(obj1Right>=obj2Left){
    return true;}

    else{
      return false;
    }


}