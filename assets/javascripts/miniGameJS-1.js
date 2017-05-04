


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



// for loops

	for (var i = 5; i > 0; i--) {

		alert(i);
	}