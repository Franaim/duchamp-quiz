![Duchamp's Dazzling Quiz logo](https://iili.io/J9X3hhb.png)

# Project 2: Duchamp's Dazzling Quiz

The **Duchamp's Dazzling Quiz** website is a test prototype for a quiz game. The user can enter a nickname and choose from three options the correct answer to each question. After selecting an option they will see the correct result, whether they got it right or wrong, and then they will have the possibility to continue to the next question.
Although the game is short, the prototype has the structure to be able to incorporate new questions very easily and thus extend the game, adding challenges and interest to the page.

![Illustrative image of the website's responsiveness](https://iili.io/J9XC04j.jpg)

## Features

### Navigation

This web page has a single page, the index.html, part of which will be progressively replaced by JavaScript functions triggered by the user's interaction with the site. In this way, new sections within the html will be reachable without the need for new pages, neither local nor external.
The user flows through the content in the following way:

- First we will find a landing page or home page with an introduction to the game.
- From there we can start the game and move on to the section where we must enter a nickname.
- Once we have done so, we can start the game. The game consists of three questions, one at a time, and to move from one to the next, we must first choose one of the three options offered.
- Finally, when answering the last question, we will have the option to finish the game, which will take us to a new section, according to the result.
- In this last section we will have feedback according to our score and the option to restart the game.

![Screenshot of Duchamp's Dazzling Quiz website's homepage](https://iili.io/J9XxYQt.jpg)

#### The Homepage

- On this homepage, we will see for the first time the header, which will remain in the same place throughout the flow of the page. It is the name of the game with Abril Fatface typography in black.
- Immediately below, we see an illustration. It is a pencil portrait of Marcel Duchamp.
- Below the image, you will see a brief introduction to the game and its contents.
- Finally a button with the message "Start the game" which when clicked will activate the slide0 function. This function will generate a partial replacement of the html, giving rise to a new section.

![Screenshot of Duchamp's Dazzling Quiz website's nickname section](https://iili.io/J9XBj1f.jpg)

#### The Nickname Section

- In this section we can see below the header nothing more than a text input element with a label inviting us to enter our own nickname and a submit button with the message "Play".

![Screenshot of Duchamp's Dazzling Quiz website's nickname section with alert](https://iili.io/J9XBWss.jpg)

- Since the nickname is a required field, attempting to enter the game without entering a nickname will result in an alert message.

![Screenshot of the background image on Duchamp's Dazzling Quiz website's nickname section](https://iili.io/J9XBwg4.jpg)

- In addition to that, in this section there is a background image that can be viewed in full by scrolling down. It is a picture of Marcel Duchamp's famous ready-made "Bicycle wheel".

![Screenshot of Duchamp's Dazzling Quiz website's quiz section](https://iili.io/J9XBhqG.jpg)

#### The Quiz Section

- Once in the quiz section, we will see a very clear and straightforward view of the game. The interaction is quite intuitive. One question and three buttons (which on the computer have a hover effect) with one option on each.
- Underneath, a counter which, set to 0 at the start, indicates correct and incorrect answers.

![Screenshot of Duchamp's Dazzling Quiz website's quiz section after selecting an answer](https://iili.io/J9XBe72.jpg)

- By clicking on any of the options, the buttons containing them will be disabled and will change colour indicating which answer was correct and which were incorrect. This is the changeColor function. Also within this function, the Next button to go to the next question will become visible and the display of a short text with an explanation of the correct answer, previously without display, will switch.
- On the other hand, depending on whether the option we have chosen is correct or incorrect, two more functions will be activated: on the one hand, the "sorry" and "congrats" functions will display a different message on the screen. On the other hand, the functions "correctlyAnswered" and "wrongAnswered" will add points of one to either the correct or wrong answer counter accordingly.

![Screenshot of Duchamp's Dazzling Quiz website's counter](https://iili.io/J9XBOdl.jpg)

- Within these functions is the "updateCounter" function, whereby the counter on the screen will be updated to show the new result, as can be seen in the image above.

#### Feedback and Score

- Now, when answering the last question, instead of the Next button we will have a Finish button. This will activate the slideResult function, which consists of an if statement and three functions depending on the case:

![Screenshot of Duchamp's Dazzling Quiz website's "Perfect Score" feedback section](https://iili.io/J9XBkeS.jpg)

- If we have got all the questions right, the perfectScore function will give us congratulatory feedback: the nickname we entered at the beginning of the game and our final score.

![Screenshot of Duchamp's Dazzling Quiz website's "Not Bad Score" feedback section](https://iili.io/J9XBvm7.jpg)

- In the same way, if we have got 1 or 2 answers out of 3 right, the goodScore function will give us another message, and as in the previous case, we will see a message including our nickname and our final score.
- Finally, in case we have failed all the questions, the badScore function will be activated, displaying a specific message on the screen, again, of course, including the final score and our nickname. See image below:

![Screenshot of Duchamp's Dazzling Quiz website's "Oops Score" feedback section](https://iili.io/J9XBSI9.jpg)

- As a final comment on the navigation, note that regardless of our result, in all versions of the feedback section we will have a button with the message "Play again" which will reload the page and take us back to the index and give us the possibility to enter a new nickname and get a new score.

## Testing

- I tested that this page works in different browsers: Chrome, Safari, Tor and Firefox.
- Applying Chrome's devtools, I verified that the design of the project was responsive and retained its functionality and good appearance on different devices (smartphones, tablets, laptops, desktops and large monitors).
- I confirmed that all content on the site is easy to see, understand and read.

### Bugs

Two bugs were detected in the process:

- Taking the variable userName: First of all the userName variable could not be taken for later use. The way to fix this error was to wrap the text input element and the play button inside a form and give the button the submit type. Then, it was necessary to avoid the default action of the submit event and, once the userName variable was defined in the global scope, give as content the value of the input submitted by the user.

- The changeColor function was only partially activated. This was due to an id selector in the function that was not matched in the html. After manual testing the error was detected and corrected.

### Unfixed bugs

- No unfixed bugs.

### Validator Testing

- HTML: No errors were detected when passing the code through the official W3C validator.
- CSS: No errors have been detected when passing the code through the official Jigsaw validator.
- JavaScript: No errors have been detected when passing the code through Jshint linter, nor when checking the flow through the website on DevTools console or when calling functions manually. A series of messages logged in the console according to the user interaction with the website ensures all it functions work properly.
- Accessibility: The colours, fonts and contrasts make the website easy to read and accessible. When testing with the Chrome devtools Lighthouse, the results were as follows:

![Screenshot of Chrome devtools lighthouse report](https://iili.io/J9hFpYN.jpg)

## Deployment

- The website was deployed to GitHub pages. Deployment instructions:

1. Under your repository name, click Settings. If you cannot see the "Settings" tab, select the dropdown menu, then click Settings.

2. From the Source section drop-down menu, select the Main Branch

3. Once the main branch has been selected, the page provides the link to the completed website.
   The live link can be found here: [Duchamp's Dazzling Quiz](https://franaim.github.io/duchamp-quiz/)

## Credits

### Media

- Most of the text was originally generated with [ChatGPT](https://chat.openai.com/)
- The illustration on homepage was made by me, Francisco Menardi.
- The image of Bicycle wheel is a photograph taken from Google. No restriction on the use of the image was found.
- The fonts were imported from [Google Fonts](https://fonts.google.com/)
