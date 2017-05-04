


document.getElementById("makeGuess").onclick = function() {

	var randomNumber = Math.random();

	randomNumber = randomNumber * 6;

	randomNumber = Math.floor(randomNumber);

	if (document.getElementById("guessNum").value == randomNumber) {

		alert("You got it right!");

	}	else {

		alert("Nope! The number was " + randomNumber);
	}


}


var tweets = ["Hi Everybody!", "Good Morning!", "Good Night!", "Midnight..."];

// for loops

	for (var i = 0; i < tweets.length; i++) {

		alert(tweets[i]);
	}