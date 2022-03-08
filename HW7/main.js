var myPhotos = new Array();

class photo {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

function initializeArray() {

    var photo1 = new photo("Untitled", "images/justice1.jpg", "Taken at Union Square, New York.", "Steve Sweatpants", 2020);
    var photo2 = new photo("Untitled", "images/justice2.jpg", "Taken at a BLM rally in Baltimore, Maryland.", "Devin Allen", 2020);
    var photo3 = new photo("We are citizens of the world", "images/justice3.jpg", "Taken at a BLM rally in Miami, Florida.", "Cyn Lagos", 2020);
    var photo4 = new photo("Untitled", "images/justice4.jpg", "Taken at a BLM rally in Los Angeles, California.", "Nikko LaMere", 2020);
    var photo5 = new photo("Untitled", "images/justice5.jpg", "Taken at a BLM rally in St. Louis, Missouri.", "Vanessa Charlot", 2020);

    myPhotos.push(photo1);
    myPhotos.push(photo2);
    myPhotos.push(photo3);
    myPhotos.push(photo4);
    myPhotos.push(photo5);
}

function accessInformation() {

    var randomNumber = Math.floor(Math.random() * myPhotos.length);
    var photo = myPhotos[randomNumber];

    document.getElementById("image").src = photo.image;
    document.getElementById("title").innerHTML = "Title: " + photo.title;
    document.getElementById("description").innerHTML = "Description: " + photo.description;
    document.getElementById("author").innerHTML = "Author: " + photo.author;
    document.getElementById("year").innerHTML = "Year: " + photo.year;
    
}