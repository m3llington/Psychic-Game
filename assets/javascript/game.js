var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];

prompt("type something");
   
    document.onkeyup = function(event) {

     
      var userGuess = event.key;
      var wins = 0;
      var losses = 0;
    
      
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      
      if (userGuess === computerGuess) {
        wins++;
        alert("you won");
      }
      else {
          losses++;
          alert("you lost");
      }
    };