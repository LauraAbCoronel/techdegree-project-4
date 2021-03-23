/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // takes in the phrase input and converts the letters to lowercase
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase');
        const phraseUl = phraseDiv.querySelector('ul');
        const charArr = this.phrase.split("");
        charArr.forEach(char => {
            const li = document.createElement('li');
            if (/[a-z]/.test(char)) {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            } else {
                li.className = 'space';
                li.textContent = char;
            }
            phraseUl.appendChild(li);
        });
    }

    /**
     * Searches for a character in the phrase
     * @param {string} letter - character to search for in the string
     * @returns {boolean} - true if the character is in the string, false if not
     */
    checkLetter(letter) {
      return this.phrase.includes(letter);
    }

    /**
     * Changes the class of matched letter to show and removes hide class to display on screen
     * @param {*} letter - character to unhide in the phrase
     */
    showMatchedLetter(letter) {
        const matchLetter = document.querySelectorAll(`.${letter}`);
        matchLetter.forEach(letter => letter.classList.replace('hide','show'));
    }
}