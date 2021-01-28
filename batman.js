class Batman{
    constructor(x, y, width,height) {
        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("walking_1.png");
        World.add(world, this.body);
    }
    display() {
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        this.visiblity = 0;
        pop();
    }
}