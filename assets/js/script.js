//html elements
let body = document.getElementById("introduction-area");
let startButton = document.getElementById("start-button");
let userName = ""; //username as an empty string to be replaced by the user's input

//Set the counter to 0
let countTrue = 0;
let countFalse = 0;

//Event listener
startButton.addEventListener("click", slide0);

//Slide from introduction to username section

function slide0() {
    
    body.innerHTML =
    `
    <form>
      <label for="username">Choose a nickname:</label><br/>
      <input type="text" id="username" name="username" placeholder="Enter nickname" required maxlength="15"/>
      <button id="play-button" type="submit" name="play">Play</button>
    </form>
    <img
          src="assets/images/wheel-gray.jpg"
          alt="Fragment of an image of 'Bicycle Wheel', one of Marcel Duchamp's ready-made."
          id="wheel-img"
        />
    `;

    userName = document.getElementById("username");
    let playButton = document.getElementById("play-button");

    //Event listeners for next slide function (once a nickname has been provided by the user)

    playButton.addEventListener("click", function(event) {
        event.preventDefault ();
        if  (userName.value === "") {  
          alert ("Please enter a nickname")
        } else {
          userName = userName.value;
          console.log("Nickname entered: " + userName)
          slide1();
        }  
    }
    );
}

//DOM functions

// Slide from username section to first question of the quiz

function slide1() {
    body.innerHTML =
    `
    <div class="question-container">
      <div id="question-area">
        <p id="question1">What nearly led Marcel Duchamp to give up his art career?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Losing his eyesight due to a health condition</button>
          <button class="option" id="false2">Writing novels</button>
          <button class="option" id="true0">Professional Chess</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="display:none">
        <p id="answer-heading" class="bold"></p><br>
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
    let nextButton = document.getElementById("next");
    

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered); //This function will increase the Correct Answers counter
    trueAnswer.addEventListener("click", changeColor); //This will change the background color of each option after selecting one
    trueAnswer.addEventListener("click", congrats1);
    falseAnswer1.addEventListener("click", wrongAnswered); //Opposed to the first function here, this will the Wrong Answers counter
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", sorry1);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", sorry1);
    nextButton.addEventListener("click", slide2);
}

//For each answer type, a different message (slide1)

function congrats1(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "That's right, professional chess.";
}

function sorry1(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "Believe it or not, it was professional chess.";
}


function changeColor() {
    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let nextButton = document.getElementById("next");
    trueAnswer.style.backgroundColor = "#b4bc37";
    falseAnswer1.style.backgroundColor = "#828d9c";
    falseAnswer2.style.backgroundColor = "#828d9c";
    nextButton.style.visibility = "visible"; //this should make the Next Question button visible only after selecting an answer
    solution.style.display = "block"; //This will make the explanation visible only after selecting an answer
    
    //These should make the clickable answers disabled after having cliked one
    trueAnswer.disabled = true;
    falseAnswer1.disabled = true;
    falseAnswer2.disabled = true;
}


function slide2() {
    body.innerHTML =
    `
    <div class="question-container">
      <div id="question-area">
        <p id="question2">What pseudonym did Marcel Duchamp use when writing art criticism?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Richard Mutt</button>
          <button class="option" id="true0">Rrose Sélavy</button>
          <button class="option" id="false2">Francis Picabia</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="display:none">
        <p id="answer-heading" class="bold"></p><br>
        <p>One of his pseudonyms was "Rrose Sélavy" (pronounced "eros, c'est la vie"), a play on the phrase "Eros, c'est la vie" meaning "Love, that's life." Under this pseudonym, Duchamp authored several humorous and satirical articles about art, further blurring the lines between his art and his commentary on art.</p>
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
    let nextButton = document.getElementById("next");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered);
    trueAnswer.addEventListener("click", changeColor);
    trueAnswer.addEventListener("click", congrats2);
    falseAnswer1.addEventListener("click", wrongAnswered);
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", sorry2);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", sorry2);
    nextButton.addEventListener("click", slide3);
    //These will make the buttons clickable again
    trueAnswer.disabled = false;
    falseAnswer1.disabled = false;
    falseAnswer2.disabled = false;
}

function congrats2(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "Rrose Sélavy, exactly.";
}

function sorry2(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "Sorry, it was Rrose Sélavy.";
}

function slide3() {
    body.innerHTML =
    `
    <div class="question-container">
      <div id="question-area">
        <p id="question3">Among the following options, which title does not correspond to a genuine work created by Marcel Duchamp?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Why Not Sneeze, Rose Sélavy?</button>
          <button class="option" id="false2">In Advance of the Broken Arm</button>
          <button class="option" id="true0">Silent Echoes of the Absurd</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="display:none">
        <p id="answer-heading" class="bold"></p><br>
        <p>Marcel Duchamp's artistic humor knew no bounds. In 1921, he unveiled "Why Not Sneeze, Rose Sélavy?," a sculpture that encapsulated his whimsical approach. This piece featured a birdcage housing a cube of sugar cubes and a small thermometer, and the very title, "Why Not Sneeze, Rose Sélavy?," exemplified the delightful absurdity at the heart of his work. In 1964, Duchamp continued to tickle the art world's funny bone with "In Advance of the Broken Arm," a sculpture that turned a standard snow shovel into a work of art. The title playfully suggested that the shovel was ahead of its time, humorously commenting on the unconventional nature of art.</p>
      </div>
      <button id="next" style= "visibility:hidden">Finish</button>
      <div id="score-area">
        <p class="scores">Correct Answers: <span id="correct">${countTrue}</span></p>
        <p class="scores">Incorrect Answers: <span id="incorrect">${countFalse}</span></p>
      </div>
    </div>
    `;

    let trueAnswer = document.getElementById("true0");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let finishButton = document.getElementById("next");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered);
    trueAnswer.addEventListener("click", changeColor);
    trueAnswer.addEventListener("click", congrats3);
    falseAnswer1.addEventListener("click", wrongAnswered);
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", sorry3);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", sorry3);
    finishButton.addEventListener("click", slideResult);
    //These will make the buttons clickable again
    trueAnswer.disabled = false;
    falseAnswer1.disabled = false;
    falseAnswer2.disabled = false;
}

function congrats3(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "Well done. 'Silent Echoes of the Absurd' was not an actual title.";
}

function sorry3(){
    let congratsMsg = document.getElementById("answer-heading");
    congratsMsg.innerHTML = "Sorry, 'Silent Echoes of the Absurd' was not an actual title.";
}

function slideResult() {
    if (countTrue === 3) {
    perfectScore();
  } else if (countTrue === 2 || countTrue === 1) {
    goodScore();
  } else {
    badScore();
  }
  console.log(userName + "'s score is: " + countTrue)
}

function perfectScore() {
    body.innerHTML = `
    <!-- For someone who answered all questions correctly: -->
    <h2 class="text-centered feedback">Congratulations, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p class="text-centered">
    You're a Duchamp disciple! You've cracked the enigmatic code of Marcel Duchamp's art. You're a true avant-garde champion!
    </p>
    <button onclick="window.location.reload()" id="restart-button">Play again</button>
    `;
}

function goodScore() {
    body.innerHTML = `
    <!-- For someone who answered one or two questions correctly: -->
    <h2 class="text-centered feedback">Not bad, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p class="text-centered">
    You've embraced Duchamp's spirit of experimentation. You made a few detours but found your way to some artistic revelations. Keep exploring!
    </p>
    <button onclick="window.location.reload()" id="restart-button">Play again</button>
    `;
    
}

function badScore() {
    body.innerHTML = `
    <!-- For someone who selected all the wrong answers: -->
    <h2 class="text-centered feedback">Oops, ${userName}!</h2>
    <p>Your score is ${countTrue}/3</p>
    <p class="text-centered">
    Looks like you took a surrealist journey of your own. Don't worry; even Duchamp had his off days. Time for a brush-up on Duchampian wisdom!
    </p>
    <button onclick="window.location.reload()" id="restart-button">Play again</button>
    `;
}

//Counter functions
function correctlyAnswered() {
  countTrue++;
  console.log(userName + " selected the right answer")
  updateCounter();
}

function wrongAnswered() {
  countFalse++;
  console.log(userName + " selected a wrong answer")
  updateCounter();
}

function updateCounter() {
  let correct = document.getElementById("correct");
  let incorrect = document.getElementById("incorrect");
  correct.innerHTML = countTrue;
  incorrect.innerHTML = countFalse;
}