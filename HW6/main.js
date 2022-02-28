var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var cardBackPath = "images/card back.jpg";
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;

var actualImages = new Array();
    
function printBlanks() {

    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++) {

        document.getElementById(imageTags[i]).src = cardBackPath;
    }
}

function createRandomImageArray() {

    var actualImagePath = ["images/10.jpg", "images/jack.jpg", "images/queen.jpg", "images/king.jpg", "images/ace.jpg"];
    var count = [0,0,0,0,0];

    while(actualImages.length < 10) {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        if(count[randomNumber] < 2) {

            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }  
}

function flipImage(number) {

    if (firstNumber < 0) {

        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];

    } else if (firstNumber >= 0) {

        secondNumber = number;
        document.getElementById(imageTags[secondNumber]).src = actualImages[secondNumber];
    } 

    if (actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {

        score++;
        setTimeout(flipToCardBack, 500); 

    } else if (actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {

        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;

        if(allFound == actualImages.length/2) { 
            var playerInformation = localStorage.getItem("playerInfo");
            player = JSON.parse(playerInformation);

            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            
            window.location = "end.html";
        }
    }
}

function addPlayer()
{
    player.firstname = document.getElementById("txtFirstName").value;
    player.lastname = document.getElementById("txtLastName").value;
    player.age = document.getElementById("txtAge").value;

    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function flipToCardBack() {

    document.getElementById(imageTags[firstNumber]).src = cardBackPath;
    document.getElementById(imageTags[secondNumber]).src = cardBackPath;

    firstNumber = -1;
    secondNumber = -1;
}

function playerInfo() {

    var playerInformation = localStorage.getItem("playerInfo");
    
    player = JSON.parse(playerInformation);

    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;

    if(document.getElementById("endInformation") != null) {

        document.getElementById("endInformation").innerHTML = str;
    }
}