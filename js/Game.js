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

    /**
     * Starts the game off by hiding the overlay screen and getting a random pharase and setting it to the activephrase property
     */
    startGame() {
        // hides the startgame overlay
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Pick a random number from 0 - length of phrases array and returns that random phrase in the array
     * @returns {object} - random object phrase in the phrase array
     */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNum];
    }
    
    /**
     * Checks the letter button selected is in the phase and calls respected methods 
     * @param {element} e - button element that triggered the event listener
     */
    handleInteraction(e) {
        const button = e.target;
        const letter = button.textContent;
        // disables the button so the user can no longer click the button
        button.disabled = 'true';
        if (this.activePhrase.checkLetter(letter)) {
            button.className = 'chosen';
            // the matched letter will appear on the webpage
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }

    removeLife() {
        const life = document.querySelectorAll('[src="images/liveHeart.png"]');
        life[life.length-1].src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed > 4) {
            this.gameOver();
        }
    }

    checkForWin() {}

    gameOver() {}
}