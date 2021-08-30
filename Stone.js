class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        image(this.image,pos.x, pos.y, this.radius);
        pop();

    }
}