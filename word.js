const Letter = require('./letter.js')

Word = function (theWord) {
    this.theWord = theWord;
    this.letters = [];
    this.underscores = [];
    console.log(this.underscores.join(''))
}
this.wordToStr = function () {
    this.letters = this.theWord.split('');
    this.underscores = this.letters.length;
		console.log(this.underscores.join(" "));
};
this.makeLetters = function () {
    for(i = 0; i < 0; i++) {
        this.letters[i] = new Letter (this.letters[i]);
        this.letters[i].letterGuesses();
    }
}
module.exports = Word;
