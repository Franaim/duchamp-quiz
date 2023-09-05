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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam cum enim deserunt laboriosam rerum esse hic? Nobis animi, eveniet ex repellendus aperiam officia! Esse nostrum ipsum error totam amet.</p>
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
        <p id="question1">What pseudonym did Marcel Duchamp use when writing art criticism?</p>
      </div>
      <div id="options-area">
          <button class="option" id="false1">Richard Mutt</button>
          <button class="option" id="true">Rrose Sélavy</button>
          <button class="option" id="false2">Francis Picabia</button>
      </div>

      <!-- This should show the right answer after the user has selected an option -->
      <div id="solution-text" style="visibility:hidden">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam cum enim deserunt laboriosam rerum esse hic? Nobis animi, eveniet ex repellendus aperiam officia! Esse nostrum ipsum error totam amet.</p>
      </div>
      <button id="next">Next</button>
    </div>
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