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

var x = 5;

x = 20;

var name = "An";

alert(name);