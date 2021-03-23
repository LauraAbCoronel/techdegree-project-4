/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Hi my name is Laura'),
                        new Phrase('How do you pronounce Worcestershire sauce'),
                        new Phrase('Like Father Like Son'),
                        new Phrase('The quick brown fox jumps over the lazy dog'),
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

    /**
     * Changes the heart image, add to missed counter and checks if out of lives
     */
    removeLife() {
        const life = document.querySelectorAll('[src="images/liveHeart.png"]');
        // changes the last heart image to lost heart
        life[life.length-1].src = "images/lostHeart.png";
        this.missed += 1;
        //if they have reached 5 guesses they lost the game
        if(this.missed > 4) {
            this.gameOver();
        }
    }

    /**
     * Checks to see if there are any letters with the hidden class
     * @returns {boolean} - true if no letters are hidden, false if there are still hidden letters
     */
    checkForWin() {
        const phraseDiv = document.querySelector('#phrase');
        const lettersLeft = phraseDiv.querySelector('.hide');
        if (lettersLeft) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Depending on if the user lost or won the start screen is displayed and h1 text is updated
     */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.className = 'start';
        overlay.style.display = "";
        if (this.missed < 5) {
            document.querySelector('#game-over-message').textContent = `YOU WON!`;
            overlay.classList.replace('start','win');
        } else {
            document.querySelector('#game-over-message').textContent = `YOU LOST.`;
            overlay.classList.replace('start','lose');
        }
        this.restartBoard();
    }

    restartBoard() {
        const qwertyButton = document.querySelectorAll(':disabled');
        qwertyButton.forEach(button => {
            button.disabled = false;
            button.className = 'key';
        });

        const tries = document.querySelectorAll('[src="images/lostHeart.png"]');
        tries.forEach(img => {
            img.src = "images/liveHeart.png";
        });
        this.missed = 0;
    }
}