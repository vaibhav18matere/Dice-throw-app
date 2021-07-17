var randomNumber1 = Math.floor(Math.random() * 6) + 1; //selects random no. from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice.png to dice.6.png

var randomImageSource = "images/" + randomDiceImage; //it will give images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //selected image element

image1.setAttribute("src", randomImageSource); //attributes are set


//doing same for dice 2 in shortcut
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//checking the result of both dices

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 wins !"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 wins !"
}
else {
    document.querySelector("h1").innerHTML = " It's Draw !!!"
}
//added a button to refresh the page
var refresh = document.getElementById("btn").addEventListener("click", function () {
    location.reload()
});