var canvas;
var ctx;
var circleArray = [];

$(document).ready(function() {
    setup();

    $(this).keypress(function(event) {
        getKey(event);
    });
});

function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    $.getJSON("circleData.json", function(data) {
        for (var i = 0; i < data.circles.length; i++) {
            circleArray.push(new Circle(data.circles[i].x, data.circles[i].y, data.circles[i].r, data.circles[i].color));
        }
        drawCircle();
    });
}

function drawSquare() {

    ctx.clearRect(0, 0, 800, 600);

    for (var i = 0; i < circleArray.length; i++) {

        console.log(circleArray[i].x, circleArray[i].y, circleArray[i].r);

        ctx.fillStyle = circleArray[i].color;
        ctx.beginPath();
        ctx.arc(circleArray[i].x, circleArray[i].y, circleArray[i].r, 0, 2 * Math.PI);
        ctx.fill();
    }
}