/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Hi my name is Laura'),
                        new Phrase('How do you pronounce Worcestershire sauce'),
                        new Phrase('Like Father Like Son'),
                        new Phrase('Back to the Drawing Board'),
                        new Phrase('Do you remember purple ketchup'),
                        new Phrase('Humpty Dumpty sat on a wall')];
        this.activePhrase = null;
    }

    startGame() {
        // hides the startgame overlay
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNum];
    }
    
    handleInteraction(e) {
        const button = e.target;
        const letter = button.textContent;
        button.disabled = 'true';
        if (this.activePhrase.checkLetter(letter)) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}