

let userWins = 0;
let userLosses = 0;
let guessesLeft = 10;
let userGuesses = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// [^/A-a]

let randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

document.onkeyup = function(event) {

    let userGuess = (event.key).toLowerCase();

    // let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(userGuesses.indexOf(userGuess));
    // set lowercase restriction?

        console.log(randomLetter);

        if (alphabet.indexOf(userGuess) === -1) {
            alert("Please enter an alphabetical character only! No repeats!");
            return;
        } else if (userGuesses.indexOf(userGuess) === -1) {    
            
            // if (userGuesses.indexOf(userGuess) > 0) {
            //     alert('repeated letter');
            //     // return;
            // }

            if (userGuess === randomLetter) {
                alert('Winner!!!');
                userWins++; 
                userGuesses = [];
                guessesLeft = 10;
                randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

            } 
            
            if (userGuess !== randomLetter) {
                guessesLeft--;
                userGuesses.push(userGuess);
                // console.log(userGuesses);

            } 
            
            if (guessesLeft === 0) {
                alert("You LOSE! The winning letter was: " + randomLetter);
                userLosses++;
                guessesLeft = 10;
                userGuesses = [];
                randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

            };    

            document.getElementById("wins").textContent = userWins;
            document.getElementById("losses").textContent = userLosses;
            document.getElementById("guessesLeft").textContent = guessesLeft;
            document.getElementById('userGuesses').textContent = userGuesses;

        } else {
            alert('Double Letter Error!');
        };

};