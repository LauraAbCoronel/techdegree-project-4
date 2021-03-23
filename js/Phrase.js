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

    // checkLetter(letter) {
    //     if (condition) {
            
    //     } else {
            
    //     }
    // }

    showMatchedLetter() {}
}