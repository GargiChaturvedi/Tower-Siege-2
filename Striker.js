class Striker {
    constructor(x, y, sides, radius) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        this.image = loadImage("hexagon.png");
        this.body = Bodies.polygon(x, y, sides, radius, options);
        World.add(world, this.body);
        this.radius = radius;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        tint("plum");
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}