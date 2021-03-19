class Drops{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.01
      }
      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    }
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
    }
    display(){
      fill("blue")
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 5);
    }
}