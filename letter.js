 Letter = function (val) {
    this.val = val.toUpperCase();
    this.guessed = false;
    this.letterGuesses = function () {
        if (this.guessed === true) {
            return (this.val)
        } else {
            return ('_')
        };
    };
    this.checkIt = function () {
        if (letter === this.val) {
            this.guessed === true;
            return true;
        } else {
            return (false)
        };
    };
}
module.exports = Letter