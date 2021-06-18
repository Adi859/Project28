class SlingShot{
    constructor(bodyA, pointB){
        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA) {

        
            stroke("white");  
            strokeWeight(2) ; 
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y) ; 
        }
    }
    
}