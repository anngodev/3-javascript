


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

// while loop
	var i = 0;

	while (i < tweets.length) {

// for loops
	
	// for (var i = 0; i < tweets.length; i++) {

		tweetString = tweetString + "<p>" + tweets[i] + "</p>";
		i++;

	// }

}

document.getElementById("tweetDiv").innerHTML = tweetString;



document.getElementById("guess").onclick = function() {

	var myNumber = document.getElementById("myNumber").value;

	var gotIt = false;

	var numberOfGuesses = 1;

	while (gotIt == false) {

		var guess = Math.random();

		guess = guess * 6;

		guess = Math.floor(guess);

		if (guess == myNumber) {
			// Computer is correct
			gotIt = true;

			alert ("Got it! It was a " + guess + ". It took me " + numberOfGuesses + " guesses.")

		} else {
			// Computer is wrong
			numberOfGuesses++;
		}

	}

}

function alertMe() {

	alert("Hi there An");

}

	alertMe();





