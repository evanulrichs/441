class Square {

    constructor(xCoord, yCoord, height, width, mainColor) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.height = height;
        this.width = width;
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

    get h() {
        return this.height;
    }
    set h(value) {
        this.height = value;
    }

    get w() {
        return this.width;
    }
    set w(value) {
        this.width = value;
    }

    get color() {
        return this.mainColor;
    }
    set color(value) {
        this.mainColor = value;
    }
}