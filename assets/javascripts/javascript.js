// This is a one line comment

/*
	This is a mult-line comment

*/
document.getElementById("text").innerHTML = "Hello An!";

document.getElementById("myButton").onclick = function() {
	document.getElementById("text").innerHTML = "Hello Rob!";
}

document.getElementById("myButton-2").onclick = function() { 
	document.getElementById("secondParagraph").innerHTML = "I think " + document.getElementById("secondParagraph").innerHTML + "awesome!";
}

document.getElementById("myButton-3").onclick = function() {
	document.getElementById("emptyParagraph").innerHTML = "Magic!";
}