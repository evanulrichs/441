var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var circle1;
var circle2;

// need to create the squares before we draw them
createCircles();
// display the squares on the basic canvas
drawCircle();

// this timer will move the second square around
setInterval(moveCircle2, 5000);

// this function creates new instances of squares
function createCircles() {
    circle1 = new Circle(x, y, 20, "blue");
    circle2 = new Circle(x2, y2, 40, "green");
}

// this function will randomly move the second square around the canvas
function moveCircle2() {

    circle2.setX(Math.floor(Math.random() * canvas.width));
    circle2.setY(Math.floor(Math.random() * canvas.height));
    drawCircle();
}

// this function just draws the squares to the canvas in their respective locations
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

// using jQuery for keystrokes
$(document).ready(function() {
    $(this).keypress(function(event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {

    // only checking collision when a key is pressed
    var didCollide = hasCollided(circle1, circle2);
    // if a collision happens
    if (didCollide) {
        // change the background color
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // change the size of the squares
        circle1.setWidth(circle1.theWidth - 1);
        circle1.setHeight(circle1.theHeight - 1);
        circle2.setWidth(circle2.theWidth + 1);
        circle2.setHeight(circle2.theHeight + 1);
    }
    // move the first square depending on what key was pressed
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    // don't forget to draw the squares again
    drawCircle();
}

// move the y to move up
function moveUp() {
    circle1.setY(circle1.theY - 10);
}

// add to the y to move down
function moveDown() {
    circle1.setY(circle1.theY + 10);
}

// subtract from the x to move to the left
function moveLeft() {
    circle1.setX(circle1.theX - 10);
}

// add to the x to move to the right
function moveRight() {
    circle1.setX(circle1.theX + 10);
}

// this is a basic collision function that checks for corners overlapping
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}