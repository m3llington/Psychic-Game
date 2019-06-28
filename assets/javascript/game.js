//Array to store potential computer guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
//Array to hold user guesses
var userStore = [];
//Multiple variables declared to keep count of results
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesleft = 10;
//generates random computer choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function resetgame() {
    wins = 0 + wins;
    losses = 0 + losses;
    guesses = 0;
    guessesleft = 10;
    //Creates a new blank array emptying out the list of letters used*
    userStore = [];
}

//when key is pressed
document.onkeyup = function (event) {

    var userGuess = event.key;
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessCounter = document.getElementById("guess-counter");
    var guessRemaining = document.getElementById("guess-remaining");
    lettersGuessed = document.getElementById("letters-guessed");
    userStore.push(userGuess);

    if (userGuess === computerGuess) {
        
        lettersGuessed.textContent = "letters guessed so far: " + userStore
        wins++;
        resetgame();
    }

    else if (userGuess !== computerGuess) {

        guesses++;
        guessesleft--;
        lettersGuessed.textContent = "letters guessed so far: " + userStore;
        
        if (guessesleft === 0) {
            losses++;
            resetgame();

        }

    }
    //Reset game only happens if correct letter is guessed, or user fails to guess correctly before running out of guesses.

    //Makes text attatched to id dissapear when game starts
    directionsText.textContent = "";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessCounter.textContent = "Guesses so far: " + guesses;
    guessRemaining.textContent = "guesses remaining:  " + guessesleft;
    lettersGuessed.textContent = "letters guessed so far: " + userStore;
};