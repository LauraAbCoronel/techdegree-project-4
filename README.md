# techdegree-project-4
 OOP Game Show App

In this project I created a Phrase Hunter app where the user has to figure out the phrase by guessing letters. The user can only guess wrong 5 times before the game is over.

I am going for Exceeds Expectations.

I added keyboard functionality by adding a keydown event listener to my app.js file. I had to update my `handleInteraction` method to handle the keydown event. since the `event.target` would no longer be the qwerty buttons. I used `querySelectorAll` to get a node list of all unselected qwerty buttons. I then turned the node list to an array and filtered out all the buttons where the `textContent` did not match the key on the keyboard that was selected. If the filter method returns an empty array nothing happens; this will handle if the user enters a non letter key or if they select the same letter twice.
I found a bug that the `handleInteraction` would be called when the game over overlay screen was shown. So to prevent that I added the `active` property to the Game object. Now the `handleInteraction` method first checks if the game is active before doing anything.

I also made my project my own by changing the colors of the qwerty button (`chosen` and `wrong` class) to match the background color of won overlay or lose overlay. I did this so its easier to know which letters were wrongly guessed and which were correct. Another major change I made was grouping the phrase by word instead of individual letters. I did this because I noticed when the display size changes the phrase gets wrapped by the individual letter not word and it made figuring out the number of words in the phrase difficult. To fix that I placed each word in its own `ul` element so when the display is adjusted the phrase is wrapped by the word not letter.