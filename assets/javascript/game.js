

let userWins = 0;
let userLosses = 0;
let guessesLeft = 10;
// let guessCount = 0;
let userGuesses = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// want random letter to not reset until game over
let randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
// console.log(randomLetter);



document.onkeyup = function(event) {

    let userGuess = event.key;

    // if (typeof(userGuess) === "string") {
    // set lowercase restriction?

        if (userGuess === randomLetter) {
            alert('winner!!!');
            userWins++; 
            userGuesses = [];
            guessesLeft = 10;
        } else if (userGuess !== randomLetter) {
            guessesLeft--;
            userGuesses.push(userGuess);
        }

        if (guessesLeft === 0) {
            alert("Sorry, you lose");
            userLosses--;
            guessesLeft = 10;
        }

        document.getElementById("wins").textContent = userWins;
        document.getElementById("losses").textContent = userLosses;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        

        // for (i = 0; i < userGuesses.length; i++) {
        //     console.log(userGuesses[i]);

        //     document.getElementById('userGuesses').textContent = userGuesses[i];
        // }

        // document.getElementById('userGuesses').textContent = userGuesses.push(userGuess);

    // }

}