// Declare Variables Objects 80 bands and words
var bandnames = ["Blondie", "ACDC", "Journey", "Madonna"];
var displayWord;
var displayArray;
var randomWord;
var LettersGuessed;
var LettersGuessedArray;
var guessesLeft = 9;

//Computer chooses a random word and display random word
function newGame() {
    randomWord = bandnames[Math.floor(Math.random() * bandnames.length)];
    console.log(randomWord);
    displayArray = [];
    LettersGuessedArray = [];
    guessesLeft = 9;

    for (var j = 0; j < randomWord.length; j++) {
        displayArray.push("-");
    }
    displayWord = displayArray.toString().replace(/,/g, "");
    console.log(displayWord);
    document.getElementById("theWord").innerHTML = displayWord;
}

function checkLetter(letter) {
    var hasMatch = false;
    for (i = 0; i < randomWord.length; i++) {
        if (randomWord.charAt(i).toLowerCase() === letter.toLowerCase())
        {
            displayArray[i] = randomWord.charAt(i);
            displayWord = displayArray.toString().replace(/,/g, "");
            hasMatch = true;
        }
    }
    if (hasMatch == false) {
        guessesLeft--;
        LettersGuessedArray.push(letter);
        if(guessesLeft <=0) {
            alert ("Sorry you lost");
            newGame();
        }
    }

    console.log("Displayword: " + displayWord);
    document.getElementById("theWord").innerHTML = displayWord;
    
    console.log("Guesses left:" + guessesLeft);
    document.getElementById("guessesleft").innerHTML = guessesLeft;

    console.log(LettersGuessedArray.toString());
    document.getElementById("LetteryousGuessed").innerHTML = LettersGuessedArray;

    if (displayWord===randomWord) {
        alert ("WOOOOOOOOOOT");
        newGame();
    }
}

newGame();
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    checkLetter(keyName);
})