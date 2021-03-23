/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [,,,,,];
        this.activePhrase = null;
    }

    startGame() {
        //hide screen overlay
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {}
    
    handleInteraction() {}

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}