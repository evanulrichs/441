var currentFunds = 20;
var groceries = "Cart: ";

function getChoice() {
    var mychoice = document.getElementById("choice").value.toLowerCase();

    if (mychoice == "bakery") {
        document.getElementById("story").innerHTML = "Deciding on the Bakery, Jimothy makes his way there. He passes a few fresh loaves of bread that smell really good. The sign says 3 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/loaf.jpg";
        document.body.style.backgroundColor = "cornsilk";
        

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("bread loaf", 3)};
    } else if (mychoice == "produce") {
        document.getElementById("story").innerHTML = "Wandering over to the prodice section, Jimothy notices a number of beautiful oranges that look plump and juicy. The sign says 1 dollar each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/oranges.jpg";
        document.body.style.backgroundColor = "coral";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("orange", 1)};
    } else if (mychoice == "dairy") {
        document.getElementById("story").innerHTML = "Moving quickly to the dairy part of the store, Jimothy's heart flutters as he sees a few small wheels of Gouda cheese, his all time favorite. The sign says 4 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/cheese.jpg";
        document.body.style.backgroundColor = "gold";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("cheese wheel", 4)};
    } else if (mychoice == "sweets") {
        document.getElementById("story").innerHTML = "Jimothy walks up to the shelves that keep all the sweets. A number of chocolate bars are prettily wrapped up in silver foil. The sign says 2 dollars each. How many should Jimothy buy?";
        document.getElementById("image").src = "images/chocolate.jpg";
        document.body.style.backgroundColor = "chocolate";

        document.getElementById("choice").type = "number";
        document.getElementById("btnSubmit").onclick = function() {purchase("chocolate bar", 2)};
    } else if (mychoice == "check out") {
        document.getElementById("story").innerHTML = "Jimothy approaches the mouse at the front counter, who politly greets him and checks out his food. Jimothy pays and walks out of the store happy with his purchase.";
        document.getElementById("image").src = "images/cashier.jpg";

        document.getElementById("choice").remove();
        document.getElementById("btnSubmit").innerHTML = "Play again?";

        document.getElementById("btnSubmit").onclick = function() {window.location.reload()};
        
    } else {
        document.getElementById("story").innerHTML = "Invalid answer!";
    }
}

function purchase(food, price) {
    var number = document.getElementById("choice").value;
    var total;

    total = getTotal(number, price);

    if (total < 0){

        document.getElementById("story").innerHTML = "You can't buy a negitive number of items!";

    } else if (currentFunds < total) {

        document.getElementById("story").innerHTML = "Jimothy doesn't have enough money!";

    } else {
        currentFunds = currentFunds - total;

        addToCart(food, number);

        document.getElementById("story").innerHTML = "Jimothy decides to buy " + number + " " + food + "(s). Where should he go next?";
    }

    document.getElementById("budget").innerHTML = "Current Funds: " + currentFunds + "$";
    document.getElementById("choice").type = "text";
    document.getElementById("choice").value = "Type in 'Bakery', 'Produce', 'Dairy', 'Sweets', or 'Check out'";
    document.getElementById("choice").size = "50";
    document.getElementById("btnSubmit").onclick = getChoice;
}

function addToCart(item, number) {

    for (let i = 0; i < number; i++) {
        groceries = groceries + item + ", ";
    }

    document.getElementById("cart").innerHTML = groceries;
}

function getTotal(number, price) {
    return (number * price);
}

