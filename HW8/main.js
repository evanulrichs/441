var allFruit = new Array();
var allColor = new Array();
var toggle = true;

class FruitInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }

    toString() {
        return this.selector + ":" + this.imagePath;
    }
}

class ColorInfo {
    constructor(selector, color) {
        this.selector = selector;
        this.color = color;
    }

    get theSelector() {
        return this.selector;
    }

    get theColor() {
        return this.color;
    }

    toString() {
        return this.selector + ":" + this.color;
    }
}

function initializeArray() {
    var fruit = new FruitInfo("#image1", "images/apple.jpg");
    allFruit.push(fruit);
    var fruit = new FruitInfo("#image2", "images/orange.jpg");
    allFruit.push(fruit);
    var fruit = new FruitInfo("#image3", "images/banana.jpg");
    allFruit.push(fruit);
    var fruit = new FruitInfo("#image4", "images/lime.jpg");
    allFruit.push(fruit);
    var fruit = new FruitInfo("#image5", "images/blueberry.jpg");
    allFruit.push(fruit);
    var fruit = new FruitInfo("#image6", "images/grape.jpg");
    allFruit.push(fruit);

    var color = new ColorInfo("#red", "RED");
    allColor.push(color);
    var color = new ColorInfo("#orange", "ORANGE");
    allColor.push(color);
    var color = new ColorInfo("#yellow", "YELLOW");
    allColor.push(color);
    var color = new ColorInfo("#green", "GREEN");
    allColor.push(color);
    var color = new ColorInfo("#blue", "BLUE");
    allColor.push(color);
    var color = new ColorInfo("#purple", "PURPLE");
    allColor.push(color);
}

$(document).ready(function() {
    initializeArray();

    $("button").click(function() {
        fruitMarch(500);
        wordWave();
        wordSwap();
        blink();
    });
});

function fruitMarch(timeInMilli) {
    $(".fruit").fadeOut(timeInMilli);

    setTimeout(function() {
        var firstFruitImagePath = allFruit[0].theImagePath;

        for (let i = 0; i < allFruit.length; i++) {
            if (i < allFruit.length - 1) {
                $(allFruit[i].theSelector).attr("src", allFruit[i + 1].theImagePath);
                allFruit[i].imagePath = allFruit[i + 1].imagePath;
            } else {
                $(allFruit[i].theSelector).attr("src", firstFruitImagePath);
                allFruit[i].imagePath = firstFruitImagePath;
            }
        }
    }, timeInMilli);

    $(".fruit").fadeIn(timeInMilli);
}

function wordSwap() {

    setTimeout(function() {
        var firstColor = allColor[0].theColor;

        for (let i = 0; i < allColor.length; i++) {
            if (i < allColor.length - 1) {
                $(allColor[i].theSelector).text(allColor[i + 1].theColor);
                allColor[i].color = allColor[i + 1].color;
            } else {
                $(allColor[i].theSelector).text(firstColor);
                allColor[i].color = firstColor;
            }
        }
    }, 500);
}

function wordWave() {

    setTimeout(function() {
        $("#red").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 0);
    setTimeout(function() {
        $("#orange").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 100);
    setTimeout(function() {
        $("#yellow").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 200);
    setTimeout(function() {
        $("#green").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 300);
    setTimeout(function() {
        $("#blue").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 400);
    setTimeout(function() {
        $("#purple").animate({ height: 80, fontSize: '4em' }).animate({ height: 20, fontSize: '1em' });
    }, 500);
}

function blink() {
    setTimeout(function() {
        if (toggle == true) {
            $("#eye").attr("src", "images/open eye.jpg");
            $("#eye").animate({ left: 400 });
            toggle = false;
        } else {
            $("#eye").attr("src", "images/closed eye.jpg");
            $("#eye").animate({ left: 0 });
            toggle = true;
        }
    }, 300);
}

function printArray() {
    for (let i = 0; i < allFruit.length; i++) {
        console.log(allFruit[i].toString());
    }
}