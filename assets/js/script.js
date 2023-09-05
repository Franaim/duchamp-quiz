//html elements
let body = document.getElementById("introduction-area")
let startButton = document.getElementById("start-button")

//Set the counter to 0

let countTrue = 0;
let countFalse = 0;

//Event listeners
startButton.addEventListener("click", slide0);
startButton.addEventListener("click", showCounter);

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
let counterDiv = document.getElementById("score-area");

//Event listeners for next slide function

let playButton = document.getElementById("play-button")
playButton.addEventListener("click", slide1);
startButton.addEventListener("click", showCounter);
}

//DOM functions

// Slide from username section to first question of the quiz

function slide1() {
    body.innerHTML =
    `
     <div class="question-area">
    <p id="question1">What nearly led Marcel Duchamp to give up his art career?</p>
    <div id="options-area">
        <button class="option" id="false1">Losing his eyesight due to a health condition</button>
        <button class="option" id="false2">Writing novels</button>
        <button class="option" id="true">Professional Chess</li>
</div>

    <!-- This should show the right answer after the user has selected an option -->
<div id="solution-text" style="visibility:hidden">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam cum enim deserunt laboriosam rerum esse hic? Nobis animi, eveniet ex repellendus aperiam officia! Esse nostrum ipsum error totam amet.
    </p>
    <button id="next">Next</button>
</div>

<div id="score-area">
    <p class="scores">Correct Answers: <span id="correct">${countTrue}</span></p>
    <p class="scores">Incorrect Answers: <span id="incorrect">${countFalse}</span></p>
</div>
    `;

    let trueAnswer = document.getElementById("true");
    let falseAnswer1 = document.getElementById("false1");
    let falseAnswer2 = document.getElementById("false2");
    let solution = document.getElementById("solution-text");
    let nextButton = document.getElementById("next");

    //Event listeners for each answer

    trueAnswer.addEventListener("click", correctlyAnswered); //This function should increase the Correct Answers counter
    trueAnswer.addEventListener("click", changeColor); //This should change the background color if each option after selecting one
    trueAnswer.addEventListener("click", showSolution); //This should make the explanation visible
    falseAnswer1.addEventListener("click", wrongAnswered); //Opposed to the first function here, this increase the Wrong Answers counter
    falseAnswer1.addEventListener("click", changeColor);
    falseAnswer1.addEventListener("click", showSolution);
    falseAnswer2.addEventListener("click", wrongAnswered);
    falseAnswer2.addEventListener("click", changeColor);
    falseAnswer2.addEventListener("click", showSolution);
}

