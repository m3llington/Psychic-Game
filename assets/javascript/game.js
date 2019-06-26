var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
var userStore = [];

    var wins = 0;
      var losses = 0;
      var guesses = 0;
      var guessesleft = 10;

      var userGuess = event.key;
      var directionsText = document.getElementById("directions-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var guessCounter = document.getElementById("guess-counter");
      var guessRemaining = document.getElementById("guess-remaining");
      var lettersGuessed = document.getElementById("letters-guessed");
    
      function resetgame(){
        wins = 0;
       losses = 0;
       guesses = 0;
       guessesleft = 10;
       //generate new computer guess;

    }
    resetgame()

    document.onkeyup = function(event) {

     
      
      
    
      
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      
      if (userGuess === computerGuess) {
        wins++;
        resetgame();
        //reset game function
      }
      else {
          userStore.push(userGuess);
          guesses++;
          guessesleft--;
          
          if(guessesleft === 0) {
            losses;
           
          }
      }



      directionsText.textContent = "";
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessCounter.textContent = "Guesses so far: " + guesses;
        guessRemaining.textContent = "guesses remaining:  " + guessesleft;
        lettersGuessed.textContent = "letters guessed so far: " + userStore;
    };