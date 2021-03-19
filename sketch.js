const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var drops = [];
var maxDrops=100;
var boy;
var t1, t2, t3, t4;
var thunder;
var destroy;

function preload(){
    t1 = loadImage("1.png")
    t2 = loadImage("2.png")
    t3 = loadImage("3.png")
    t4 = loadImage("4.png")
}

function setup(){
   var canvas = createCanvas(400,900);
   engine = Engine.create();
   world = engine.world;
   if(frameCount%100 === 0){
    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)))
    }
   }
   boy = new Umbrella(200,750)
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    num = Math.round(random(1,4))
    if(frameCount % 70 === 0){
        destroy = frameCount
        thunder = createSprite(random(10,370), random(10,30))
            switch(num){
                case 1: thunder.addImage(t1)
                break
                case 2: thunder.addImage(t2)
                break
                case 3: thunder.addImage(t3)
                break
                case 4: thunder.addImage(t4)
                break
            }
        thunder.scale = random(0.3,0.6)
    }

    if(destroy + 7 === frameCount && thunder){
        thunder.destroy()
    }
    boy.display();
    drawSprites()
}