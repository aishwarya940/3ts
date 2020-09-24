class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
        polygon_img = loadImage("Images/Pentagon1.png")
    
    }
    
    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
     imageMode(CENTER)
     image(polygon_img,polygon.position.x,polygon.position.y,60,60)
  } 
}