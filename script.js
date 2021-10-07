
// image1
var randomNumberOne = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumberOne + ".png";

var firstImage = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

// image2

var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

var randomImageTwo = "images/dice" + randomNumberTwo + ".png";

var secondImage = document.querySelectorAll("img")[1].setAttribute("src", randomImageTwo);

// change header

var header = document.querySelector("h1");
if(randomNumberOne > randomNumberTwo) {
  header.innerHTML = header.innerHTML.replace(" Refresh me ", "🚩Player 1 Wins!");
} else if (randomNumberOne === randomNumberTwo){
    header.innerHTML = header.innerHTML.replace(" Refresh me ", "Draw");
}
 else {
    header.innerHTML = header.innerHTML.replace(" Refresh me ", "Player 2 Wins!🚩");
}
