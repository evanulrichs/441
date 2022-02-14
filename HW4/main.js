var currentFunds = 20;

function getChoice() {
    var mychoice = document.getElementById("choice").value.toLowerCase();

    if (mychoice == "bakery") {
        document.getElementById("story").innerHTML = "Deciding on the Bakery, Jimothy makes his way there. He passes a few fresh loaves of bread that smell really good. The sign says 3 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/loaf.jpg";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("loaf", 3)};
    } else if (mychoice == "produce") {
        document.getElementById("story").innerHTML = "Wandering over to the prodice section, Jimothy notices a number of beautiful oranges that look plump and juicy. The sign says 1 dollar each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/oranges.jpg";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("orange", 1)};
    } else if (mychoice == "dairy") {
        document.getElementById("story").innerHTML = "Moving quickly to the dairy part of the store, Jimothy's heart flutters as he sees a few small wheels of Gouda cheese, his all time favorite. The sign says 4 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/cheese.jpg";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("wheel", 4)};
    } else if (mychoice == "sweets") {
        document.getElementById("story").innerHTML = "Jimothy walks up to the shelves that keep all the sweets. A number of chocolate bars are prettily wrapped up in silver foil. The sign says 2 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/chocolate.jpg";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("bar", 2)};
    }else {
        document.getElementById("story").innerHTML = "Invalid answer!";
    }
}

function purchase(item, price) {
    var number = document.getElementById("choice").value;
    var total;

    total = number * price;
    currentFunds = currentFunds - total;

    document.getElementById("budget").innerHTML = "Current Funds: " + currentFunds + "$";
    document.getElementById("story").innerHTML = "Jimothy decides to buy " + number + " " + item + "(s). Where should he go next?";

    document.getElementById("choice").type = "text";
    document.getElementById("choice").value = "";
    document.getElementById("btnSubmit").onclick = getChoice;
}

