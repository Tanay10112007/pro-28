class String{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.03,
            length : 15
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world,this.body);
    }
    fly(){
        this.string.bodyA = null;
    }
    Launch(){
        this.string.bodyA = bodyA;
    }
    display(){

    }
}