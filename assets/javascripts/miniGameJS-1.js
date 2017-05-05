


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

var tweetString = "";

var tweets = ["Hi Everybody!", "Good Morning!", "Good Night!", "Midnight...", "Can't sleep..."];

// for loops

	for (var i = 0; i < tweets.length; i++) {

		tweetString = tweetString + "<p>" + tweets[i] + "</p>";
}

document.getElementById("tweetDiv").innerHTML = tweetString;