document.getElementById("red").onclick = function() {
	document.getElementById("red").style.display = "none";
}

document.getElementById("blue").onclick = function() {
	document.getElementById("blue").style.display = "none";
}

document.getElementById("yellow").onclick = function() {
	document.getElementById("yellow").style.display = "none";
}

document.getElementById("poof").onclick = function() {
	var textEntered = "";

	textEntered = document.getElementById("textInput").value;

	document.getElementById("changeThis").innerHTML = textEntered;

}

document.getElementById("checkMagicWord").onclick = function() {

	var magicWordEntered = document.getElementById("magicWord").value;

	var magicWord = "Kazam!";

	if (magicWordEntered == magicWord) {

		alert("You got it!");

	}	else {

		alert("Nope, try again")

	}	
}

var myArray = new Array();

myArray[0] = "pizza";

myArray[1] = "chocolate";

myArray[2] = "donuts"

var tweets = ["Morning Everybody!", "I love coffee!"];

tweets.push("Back to work");

// delete tweet 1 inside array tweet starting from 1 to 1
tweets.splice(1, 1, "Cornflakes for breakfast!", "Nom Nom");

alert(tweets[1]);

console.log(tweets);

var name = "An";

alert(name);

var x = 2;

if (x == 1) {

	alert("x is 1");

} else {

	alert("x is not 1");
}


