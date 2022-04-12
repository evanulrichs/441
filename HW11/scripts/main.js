var canvas;
var ctx;
var circleArray = [];
var squareArray = [];
var down = true;
var score = 0;

$(document).ready(function() {
    setup();

    $(this).keypress(function(event) {
        getKey(event);
    });
});

setInterval(moveObsticles, 20);


function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    $.getJSON("data/circleInfo.json", function(data) {
        for (var i = 0; i < data.circles.length; i++) {
            circleArray.push(new Circle(data.circles[i].x, data.circles[i].y, data.circles[i].r, data.circles[i].color));
        }
    });
    $.getJSON("data/squareInfo.json", function(data) {
        for (var i = 0; i < data.squares.length; i++) {
            squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
    });
    draw();
}

function draw() {

    ctx.clearRect(0, 0, 800, 600);

    for (var i = 0; i < circleArray.length; i++) {
        ctx.fillStyle = circleArray[i].color;
        ctx.beginPath();
        ctx.arc(circleArray[i].x, circleArray[i].y, circleArray[i].r, 0, 2 * Math.PI);
        ctx.fill();
    }

    for (var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].color;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].w, squareArray[i].h);
    }
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 50);
}

function moveObsticles() {
    //circles
    if (down == true) {
        for (let i = 1; i < circleArray.length; i++) {
            circleArray[i].y += 5;

            if (circleArray[i].y >= 600) {
                down = false;
            }
        }
    } else {
        for (let i = 1; i < circleArray.length; i++) {
            circleArray[i].y -= 5;

            if (circleArray[i].y <= 0) {
                down = true;
            }
        }
    }
    //squares
    if (down != true) {
        for (let i = 0; i < squareArray.length; i++) {
            squareArray[i].y += 5;

            if (squareArray[i].y >= 600) {
                down = false;
            }
        }
    } else {
        for (let i = 0; i < squareArray.length; i++) {
            squareArray[i].y -= 5;

            if (squareArray[i].y <= 0) {
                down = true;
            }
        }
    }
    draw();
}

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    //circle collision check
    for (let i = 1; i < circleArray.length; i++) {

        var circleCollide = circleCollision(circleArray[0], circleArray[i]);

        if (circleCollide) {
            circleArray[i].r = 0;
            score++;
        }
    }
    //square collision check
    for (let i = 0; i < squareArray.length; i++) {

        var squareCollide = squareCollision(circleArray[0], squareArray[i]);

        if (squareCollide) {
            return;
        }
    }

    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    draw();
}

function moveUp() {
    circleArray[0].y -= 10;
}

function moveDown() {
    circleArray[0].y += 10;
}

function moveLeft() {
    circleArray[0].x -= 10;
}

function moveRight() {
    circleArray[0].x += 10;
}

function circleCollision(player, circle) {
    return !(
        ((player.y + player.r) < (circle.y - circle.r)) || //bottom edge, top edge
        ((player.y - player.r) > (circle.y + circle.r)) || //top edge, bottom edge 
        ((player.x + player.r) < (circle.x - circle.r)) || //right edge, left edge
        ((player.x - player.r) > (circle.x + circle.r)) //left edge, right edge
    );
}

function squareCollision(player, square) {
    return !(
        ((player.y + player.r) < (square.y)) ||
        ((player.y - player.r) > (square.y + square.height)) ||
        ((player.x + player.r) < square.x) ||
        ((player.x - player.r) > (square.x + square.width))
    );
}