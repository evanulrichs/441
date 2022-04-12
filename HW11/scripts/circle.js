class Circle {

    constructor(xCoord, yCoord, radius, mainColor) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.radius = radius;
        this.mainColor = mainColor;
    }

    get x() {
        return this.xCoord;
    }
    set x(value) {
        this.xCoord = value;
    }

    get y() {
        return this.yCoord;
    }
    set y(value) {
        this.yCoord = value;
    }

    get r() {
        return this.radius;
    }
    set r(value) {
        this.radius = value;
    }

    get color() {
        return this.mainColor;
    }
    set color(value) {
        this.mainColor = value;
    }
}