class Umbrella{
    constructor(x, y){
       var opp ={
         'isStatic' : true
       }

       this.umbrella = Bodies.circle(x, y, 60, opp)
       this.radius = 60
       this.image = loadImage("images/Walking Frame/walking_1.png")
       World.add(world, this.umbrella)
    }

    display(){
        
        imageMode(CENTER)
        image(this.image, this.umbrella.position.x, this.umbrella.position.y+50, 300, 300)
    }
}