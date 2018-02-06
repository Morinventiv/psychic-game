//Global Variables//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pcLetter = "";
var playerGuess = "";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];


document.getElementById("winsSpan").innerHTML = wins;
document.getElementById("lossesSpan").innerHTML = losses;
document.getElementById("guessesLeftSpan").innerHTML = guessesLeft;
document.getElementById("guessedLettersSpan").innerHTML = guessedLetters;

//pc chooses a letter//
function pcChoice() {
	var x = Math.floor(Math.random() * alphabet.length);
	pcLetter = alphabet[x];
	console.log(pcLetter);
}
pcChoice();

//player chooses a letter//
document.onkeyup = function (event) {
	guessedLettersSpan.textContent = guessedLetters;
	if (alphabet.indexOf(event.key) >= 0 && guessedLetters.indexOf(event.key) < 0) {
		if (event.key === pcLetter) {
			wins++;
			document.getElementById("winsSpan").innerHTML = wins;
			$("#guessedLettersSpan").empty();
			pcChoice();
			guessesLeft = 10;
			guessedLetters = [];
			document.getElementById("guessesLeftSpan").innerHTML = guessesLeft;

		}
		else if (guessesLeft === 1) {
			losses++;
			document.getElementById("lossesSpan").innerHTML = losses;
			$("#guessedLettersSpan").empty();
			pcChoice();
			guessesLeft = 10;
			guessedLetters = [];
			document.getElementById("guessesLeftSpan").innerHTML = guessesLeft;

		}
		else if (guessesLeft > 1) {
			guessesLeft--;
			guessedLetters.push(event.key);
			console.log(guessedLetters);
			document.getElementById("guessesLeftSpan").innerHTML = guessesLeft;
			document.getElementById("guessedLettersSpan").innerHTML = guessedLetters;
		}
	}
}
//compares player choice to pc choice//


//computes attempts and adjusts scores accordingly//


//if guessed correct, cleared guessed letters//