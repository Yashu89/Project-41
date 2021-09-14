const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world
var drops = []
var maxDrops = 100
var umbrella
var rand
var thunder, thunder1, thunder2, thunder3, thunder4
var thunderFrame = 0

function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
    
}

function setup(){
   createCanvas(500, 650)

   engine = Engine.create()
   world = engine.world

   umbrella = new Umbrella(230, 470)

   for(var k=0; k < maxDrops; k++){
       drops.push(new Drops(random(0, 700), random(0, 600)))
   }
    
}

function draw(){
    background('Black')
    Engine.update(engine)

    rand = Math.round(random(1, 4))
    if(frameCount%50 === 0){
        thunderFrame = frameCount
        thunder = createSprite(random(50, 550), random(50, 100), 15, 15)
        switch(rand){
            case 1 : thunder.addImage(thunder1)
            break;
            case 2 : thunder.addImage( thunder2)
            break;
            case 3 : thunder.addImage(thunder3)
            break;
            case 4 : thunder.addImage(thunder4)
            break;
        }

        thunder.scale = 0.35
    }

    if(thunderFrame + 10 === frameCount && thunder ){
        thunder.destroy()
    }

    umbrella.display()

    for(var k=0; k < maxDrops; k++){
        drops[k].display()
        drops[k].update()
    }

    drawSprites()
}   

