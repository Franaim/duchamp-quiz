let body = document.getElementById("game-area")
let startButton = document.getElementById("start-button")

startButton.addEventListener("click", slide2)

function slide2() {
    `
    <p class="question-area">Choose a nickname</p>
    <form>
      <label for="username">Player:</label><br />
      <input type="text" id="username" name="username" required />
    </form>
    <p id="slide2-nextButton">Next</p>
    `
}