//html elements
let body = document.getElementById("introduction-area")
let startButton = document.getElementById("start-button")

//Set the counter to 0

let countTrue = 0;
let countFalse = 0;

//Event listeners
startButton.addEventListener("click", slide0);
startButton.addEventListener("click", showCounter);


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

//Event listeners

let playButton = document.getElementById("play-button")
playButton.addEventListener("click", slide1);
startButton.addEventListener("click", showCounter);
}

