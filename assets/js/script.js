//html elements
let body = document.getElementById("introduction-area")
let startButton = document.getElementById("start-button")

//Set the counter to 0

let countTrue = 0;
let countFalse = 0;


//Event listeners
startButton.addEventListener("click", slide0);



//Slide from introduction to username section

function slide0() {
    
    body.innerHTML =
    `
     <p class="question-area">Choose a nickname</p>
        <form>
          <label for="username">Player:</label><br />
          <input type="text" id="username" name="username" required />
        </form>
        <button id="play-button">Play</button>
    `;
let userName = document.getElementById("username");
let playButton = document.getElementById("play-button")

//Event listeners for next slide function


playButton.addEventListener("click", slide1);
}

//DOM functions

// Slide from username section to first question of the quiz

function slide1() {
    body.innerHTML =
    `
    <div id="first-question-container">
      <div id="question-area">
        <p id="question1">What nearly led Marcel Duchamp to give up his art career?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Losing his eyesight due to a health condition</button>
          <button class="option" id="false2">Writing novels</button>
          <button class="option" id="true0">Professional Chess</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="visibility:hidden">
        <p id="answer-heading">Professional Chess</p><br>
        <p>Duchamp had a deep passion for chess and even considered giving up art to become a professional chess player. He competed in several chess tournaments and achieved the title of "Master" in 1950. 
One fun fact is his love for playing chess in unconventional places. Duchamp was known for carrying a pocket chess set with him wherever he went. He was so passionate about the game that he would challenge friends and even strangers to impromptu chess matches in cafes, art galleries, and even while riding on buses or trains.</p>
      </div>
      <button id="next" style= "visibility:hidden">Next</button>
      <div id="score-area">
        <p class="scores">Correct Answers: <span id="correct">${countTrue}</span></p>
        <p class="scores">Incorrect Answers: <span id="incorrect">${countFalse}</span></p>
      </div>
    </div>
    `;

    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let nextButton = document.getElementById("next");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered); //This function will increase the Correct Answers counter
    trueAnswer.addEventListener("click", changeColor); //This will change the background color of each option after selecting one
    falseAnswer1.addEventListener("click", wrongAnswered); //Opposed to the first function here, this will the Wrong Answers counter
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    nextButton.addEventListener("click", slide2);
}

function changeColor() {
    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let nextButton = document.getElementById("next");
    trueAnswer.style.backgroundColor = "green";
    falseAnswer1.style.backgroundColor = "red";
    falseAnswer2.style.backgroundColor = "red";
    nextButton.style.visibility = "visible"; //this should make the Next Question button visible only after selecting an answer
    solution.style.visibility = "visible"; //This will make the explanation visible only after selecting an answer
    
    //These should make the clickable answers disabled after having cliked one
    trueAnswer.disabled = true;
    falseAnswer1.disabled = true;
    falseAnswer2.disabled = true;
}


function slide2() {
    body.innerHTML =
    `
    <div id="second-question-container">
      <div id="question-area">
        <p id="question2">What pseudonym did Marcel Duchamp use when writing art criticism?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Richard Mutt</button>
          <button class="option" id="true0">Rrose Sélavy</button>
          <button class="option" id="false2">Francis Picabia</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="visibility:hidden">
        <p id="answer-heading">Rrose Sélavy</p><br>
        <p>Duchamp occasionally wrote art criticism under a pseudonym. One of his pseudonyms was "Rrose Sélavy" (pronounced "eros, c'est la vie"), a play on the phrase "Eros, c'est la vie" meaning "Love, that's life." Under this pseudonym, Duchamp authored several humorous and satirical articles about art, further blurring the lines between his art and his commentary on art.</p>
      </div>
      <button id="next">Next</button>
      <div id="score-area">
        <p class="scores">Correct Answers: <span id="correct">${countTrue}</span></p>
        <p class="scores">Incorrect Answers: <span id="incorrect">${countFalse}</span></p>
      </div>
    </div>
    `;

    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let nextButton = document.getElementById("next");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered);
    trueAnswer.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", wrongAnswered);
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    nextButton.addEventListener("click", slide3);
    //These will make the buttons clickable again
    trueAnswer.disabled = false;
    falseAnswer1.disabled = false;
    falseAnswer2.disabled = false;
}

function slide3() {
    body.innerHTML =
    `
    <div id="third-question-container">
      <div id="question-area">
        <p id="question3">Among the following options, which title does not correspond to a genuine work created by Marcel Duchamp?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Why Not Sneeze, Rose Sélavy?</button>
          <button class="option" id="false2">In Advance of the Broken Arm</button>
          <button class="option" id="true0">The Bicycle Wheel</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="visibility:hidden">
        <p id="answer-heading">The Bicycle Wheel</p><br>
        <p>Marcel Duchamp's artistic humor knew no bounds. In 1921, he unveiled "Why Not Sneeze, Rose Sélavy?," a sculpture that encapsulated his whimsical approach. This piece featured a birdcage housing a cube of sugar cubes and a small thermometer, and the very title, "Why Not Sneeze, Rose Sélavy?," exemplified the delightful absurdity at the heart of his work. In 1964, Duchamp continued to tickle the art world's funny bone with "In Advance of the Broken Arm," a sculpture that turned a standard snow shovel into a work of art. The title playfully suggested that the shovel was ahead of its time, humorously commenting on the unconventional nature of art.</p>
      </div>
      <button id="finish">Finish</button>
      <div id="score-area">
        <p class="scores">Correct Answers: <span id="correct">${countTrue}</span></p>
        <p class="scores">Incorrect Answers: <span id="incorrect">${countFalse}</span></p>
      </div>
    </div>
    `;

    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let finishButton = document.getElementById("finish");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered);
    trueAnswer.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", wrongAnswered);
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    finishButton.addEventListener("click", slideResult);
    //These will make the buttons clickable again
    trueAnswer.disabled = false;
    falseAnswer1.disabled = false;
    falseAnswer2.disabled = false;
}

function slideResult() {
    if (countTrue === 3) {
    perfectScore();
  } else if (countTrue === 2 || countTrue === 1) {
    goodScore();
  } else {
    badScore();
  }
}

function perfectScore() {
    body.innerHTML = `
    <!-- For someone who answered all questions correctly: -->

    <h2>Congratulations, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p>
      You're a Duchamp disciple! You've cracked the enigmatic code of Marcel Duchamp's art. You're a true avant-garde champion!
    </p>
    <button onclick="window.location.reload()">Play again</button>
    `;
}

function goodScore() {
    body.innerHTML = `
    <!-- For someone who answered one or two questions correctly: -->

    <h2>Not bad, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p>
      You've embraced Duchamp's spirit of experimentation. You made a few detours but found your way to some artistic revelations. Keep exploring!
    </p>
    <button onclick="window.location.reload()">Play again</button>
    `;
}

function badScore() {
    body.innerHTML = `
    <!-- For someone who selected all the wrong answers: -->

    <h2>Oops, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p>
      Looks like you took a surrealist journey of your own. Don't worry; even Duchamp had his off days. Time for a brush-up on Duchampian wisdom!
    </p>
    <button onclick="window.location.reload()">Play again</button>
    `;
}

//Counter functions
function correctlyAnswered() {
  countTrue++;
  updateCounter();
}

function wrongAnswered() {
  countFalse++;
  updateCounter();
}

function updateCounter() {
  let correct = document.getElementById("correct");
  let incorrect = document.getElementById("incorrect");
  correct.innerHTML = countTrue;
  incorrect.innerHTML = countFalse;
}