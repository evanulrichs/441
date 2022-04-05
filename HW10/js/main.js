var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 150;
var y2 = 150;
var circle1;
var circle2;
var radians = 0;
var velocity = 0.05;
var colorArray = ["rgb(247, 153, 255)", "rgb(203, 89, 255)", "rgb(168, 214, 255)"];

createCircles();
drawCircle();

setInterval(moveCircle2, 20);

function createCircles() {
    circle1 = new Circle(x, y, 20, colorArray[0]);
    circle2 = new Circle(x2, y2, 40, colorArray[1]);
}

function moveCircle2() {
    radians += velocity;

    circle2.setX(Math.floor(Math.sin(radians) * 200) + 400);
    circle2.setY(Math.floor(Math.cos(radians) * 200) + 300);

    drawCircle();
}

function drawCircle() {
    ctx.clearRect(0, 0, 800, 600);

    ctx.fillStyle = circle1.theColor;
    ctx.beginPath();
    ctx.arc(circle1.theX, circle1.theY, circle1.theR, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = circle2.theColor;
    ctx.beginPath();
    ctx.arc(circle2.theX, circle2.theY, circle2.theR, 0, 2 * Math.PI);
    ctx.fill();
}

$(document).ready(function() {
    $(this).keypress(function(event) {
        getKey(event);
    });
});

function getKey(event) {

    var didCollide = hasCollided(circle1, circle2);
    var R1;
    var R2;
    var color;

    if (didCollide) {
        canvas.style.backgroundColor = colorArray[0];
        circle1.setColor(colorArray[1]);
        circle2.setColor(colorArray[2]);

        color = colorArray.shift();
        colorArray.push(color);

        R1 = circle1.r;
        R2 = circle2.r;

        circle1.setRadius(R2);
        circle2.setRadius(R1);
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w" && (circle1.y - circle1.r > 0)) {
        moveUp();
    } else if (actualLetter == "s" && (circle1.y + circle1.r < 600)) {
        moveDown();
    } else if (actualLetter == "d" && (circle1.x + circle1.r < 800)) {
        moveRight();
    } else if (actualLetter == "a" && (circle1.x - circle1.r > 0)) {
        moveLeft();
    }
    drawCircle();
}

function moveUp() {
    circle1.setY(circle1.theY - 10);
}

function moveDown() {
    circle1.setY(circle1.theY + 10);
}

function moveLeft() {
    circle1.setX(circle1.theX - 10);
}

function moveRight() {
    circle1.setX(circle1.theX + 10);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.r) < (object2.y - object2.r)) || //bottom edge, top edge
        ((object1.y - object1.r) > (object2.y + object2.r)) || //top edge, bottom edge 
        ((object1.x + object1.r) < (object2.x - object2.r)) || //right edge, left edge
        ((object1.x - object1.r) > (object2.x + object2.r)) //left edge, right edge
    );
}