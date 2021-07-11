class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.R2=loadImage("sprites/R2.png");
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null ;
    }  

    attach(body){
        this.sling.bodyA  =body
    }

    display(){
        image(this.R2 ,-130,20);
        
         
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8)
            strokeWeight(4);
            
        }
    }
    
}