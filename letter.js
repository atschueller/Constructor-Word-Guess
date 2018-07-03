

class Letter {
    constructor(val) {
        this.val = hiddenVal;
        this.guessed = false;
    };
    letterGuesses() {
        if(this.guessed) {
            return(this.val)
        } else {
            return('_')
        };
    };
    checkIt(letter) {
        if(letter === this.val) {
            this.guessed === true;
            return true;
        } else {
            return(false)
        };
    };
};
module.exports = Letter;