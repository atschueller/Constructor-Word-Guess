const letter = require ('./letter.js')


class Word {
constructor(word) {
    this.letters = word.split('').map(val => new Letter(val))
};
wordToStr() {
    return this.letters.map(letter => letter.letterGuesses());
};
guessCheck() {
    return this.letters.map(letter => letter.checkIt())
};
}
module.exports = Word;