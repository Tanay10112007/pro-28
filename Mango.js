class Mango{
    constructor(x, y, width, height){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.body = Bodies.rectangle(x, y, width ,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}