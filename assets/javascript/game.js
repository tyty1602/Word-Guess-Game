// Declare Variables Objects 80 bands and words

var bandnames ={

Blondie : {
    Bandname: "Blondie",
    Song: "Call me",
    Bio: "link",
},

BonJovi : {
    Bandname: "Bon Jovi",
    Song: "Wanted Dead or Alive",
    Bio: "link",
},

ACDC : {
    Bandname: "ACDC",
    Song: "Highway to hell",
    Bio: "link",
},

LZ : {
    Bandname: "Led Zepplin",
    Song: "Thor song",
    Bio: "link",
},

GNR : {
    Bandname: "Guns N' Roses",
    Song: "Heartbreak Hotel",
    Bio: "link",
},

J : {
    Bandname: "Journey",
    Song: "Don't stop believing",
    Bio: "link",
},


VH : {
    Bandname: "Van Halen",
    Song: "Why can't this be love?",
    Bio: "link",
},


Madd : {
    Bandname: "Madonna",
    Song: "Papa don't preach",
    Bio: "link",
},

}

//What is a game object?

//wins and losses start at
var correct = 0;
var chances = 0;
var incorrect = 8;

//Create variables that hold reference to the places in HTML where we want to display things
var correct = document.getElementById("correct")
var chances = document.getElementById("chances")
var incorrect = document.getElementById("incorrect")

//Computer chooses a random word
var randomword= words[Math.floor(Math.random()*bandnames.length)];

//for loops for to check on answers against random word

var answerarray =[];
for (var i=0; i< bandnames.length, i++) {answerarray[i] ="-";}

var remainingletters =bandnames.length;

//showing players progress -----look up JS output to write in HTML
alert(answerarray).join("");

//Taking user input

document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
        alert("Character typed: " + String.fromCharCode(charCode));
    }
};

//Function for computer to guess and to check on letters of words



//Array to keep words guesses, size xyz


//Is the current word guessed correctly? If so, done

//event listener, index of 

 



        //Function to check on words


        //Change music