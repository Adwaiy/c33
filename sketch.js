var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var engine,world;

var particles = [particle];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var gameState="Play";
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,40);
 fill(255);

 textSize(35)
 text("500",5,50);
 text("500",80,50);
 text("500",160,50);
 text("500",240,50);
 text("100",320,50);
 text("100",400,50);
 text("100",480,50);
 text("200",560,50);
 text("200",640,50);
 text("200",720,50);


  Engine.update(engine);
  ground.display();
  if(gameState="End"){
    background("black");
    fill("red");
    textSize(100)
    text("Game Over",200,400);


  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>700){
      if(particle.body.position.x<300){
score=score+500;
particle=null;
if(count>=5)gameState="End";

      }
      else if(particle.body.position.x>301&&particle.body.position.x<600){
        score=score+100;
        particle=null;

if(count>=5)gameState="End";
      }

    }else if(particle.body.position.x>601&&particle.body.position.x<900){
        score=score+200;
        particle=null;

if(count>=5)gameState="End";
    }
  }
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   function mousePressed(){
     if(gameState!==End){
       count++;
       particle=new Particle(mouseX,50,10,10)
     }
   }