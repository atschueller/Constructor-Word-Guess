const Word = require("./word.js");
var inquirer = require('inquirer');

var wordList = ['beagle', 'maltese', 'pug', 'pointer', 'golden', 'bichon', 'labrador']
var alreadyGuessed = [];
function randomWord() {
    var randomPick = Math.floor(Math.random() * wordList.length);
    var randomWord = wordList[randomPick];
    var wordChosen = new Word(randomWord);
    wordChosen.wordToStr();
    wordChosen.makeLetters();
};
randomWord();

function userInput() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please guess a letter: ',
            name: 'letterTyped',
            validate: function (value) {
                if (isLetter(value)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]).then(guess => {
        guess.letter.toUpperCase();
        userGuessedCorrectly = false;

        if (alreadyGuessed.indexOf(guess.letter.toUpperCase) === -1) {
            console.log('Guessed already! Please pick another letter')
        }
        else if (alreadyGuessed.indexOf(guess.letter.toUpperCase()) === -1) {
            lettersAlreadyGuessedList = lettersAlreadyGuessedList.concat(" " + guess.letter.toUpperCase());
            lettersAlreadyGuessedListArray.push(guess.letter.toUpperCase());

            for (i = 0; i < wordChosen; i++) {
                if (guess.letter.toUpperCase() === wordChosen.letters[i].character && wordChosen.letters[i].letterGuessedCorrectly === false) {
                    someWord.letters[i].letterGuessedCorrectly === true;
                    userGuessedCorrectly = true;
                    wordChosen.underscores[i] = guess.letter.toUpperCase();
                };
            }
        }
    });

};
userInput();


