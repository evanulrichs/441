(function($) {
    $.fn.typeBackgroud = function(types) {
        this.css("background", function() {
            if (types.length == 2) {
                return "linear-gradient(90deg, " + typeToColor(types[0]) + " 0%, " + typeToColor(types[1]) + " 100%)";
            } else {
                return "linear-gradient(90deg, " + typeToColor(types[0]) + " 0%, " + typeToColor(types[0]) + " 100%)";
            }
        });
        return this;
    };
}(jQuery));

$(document).ready(function() {
    pokedexUpdate(0);
});

$(function() {
    $("button").click(function() {
        var pokeID = $("#input").val();
        pokeID--;
        pokedexUpdate(pokeID);
    });
});

function pokedexUpdate(pokeID) {
    $.getJSON("pokedex.json", function(pokeData) {
        $.each(pokeData, function(i, pokeArray) {
            $("#numberAndName").text(pokeArray[pokeID].num + " " + pokeArray[pokeID].name);
            $("#img").attr("src", pokeArray[pokeID].img);
            $("body").typeBackgroud(pokeArray[pokeID].type);
        });
    });
}

function typeToColor(type) {
    switch (type) {
        case "Bug":
            return "#A6B91A";
        case "Dark":
            return "#705746";
        case "Dragon":
            return "#6F35FC";
        case "Electric":
            return "#F7D02C"
        case "Fairy":
            return "#D685AD";
        case "Fighting":
            return "#C22E28"
        case "Fire":
            return "#EE8130"
        case "Flying":
            return "#A98FF3"
        case "Ghost":
            return "#735797"
        case "Grass":
            return "#7AC74C"
        case "Ground":
            return "#E2BF65";
        case "Ice":
            return "#96D9D6";
        case "Normal":
            return "#A8A77A";
        case "Poison":
            return "#A33EA1";
        case "Psychic":
            return "#F95587";
        case "Rock":
            return "#B6A136";
        case "Steel":
            return "#B7B7CE";
        case "Water":
            return "#6390F0";
        default:
            return null
    }
}