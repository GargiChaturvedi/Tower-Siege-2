class Redbox extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage("redbox.png");
    }
}