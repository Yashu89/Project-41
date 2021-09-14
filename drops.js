class Drops{
    constructor(x, y){
      var op={
        'friction' : 0.1
      }

      this.body = Bodies.circle(x, y, 6, op)
      this.radius = 6
      World.add(world, this.body)
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {
                x : random(0, 400),
                y : random(0, 400)
            })
        }
    }

    display(){

        fill('blue')
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)

    }

}