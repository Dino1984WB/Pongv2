document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const leftPaddle = document.getElementById("leftPaddle");
  const rightPaddle = document.getElementById("rightPaddle");
  const ball = document.querySelector(".ball");

  let gameStarted = false;

  function handleKeyDown(event) {
      if (gameStarted) {
          if (event.key === "w" && parseInt(leftPaddle.style.top) > 0) {
              leftPaddle.style.top = parseInt(leftPaddle.style.top) - 10 + "px";
          } else if (event.key === "s" && parseInt(leftPaddle.style.top) < 320) {
              leftPaddle.style.top = parseInt(leftPaddle.style.top) + 10 + "px";
          } else if (event.key === "o" && parseInt(rightPaddle.style.top) > 0) {
              rightPaddle.style.top = parseInt(rightPaddle.style.top) - 10 + "px";
          } else if (event.key === "l" && parseInt(rightPaddle.style.top) < 320) {
              rightPaddle.style.top = parseInt(rightPaddle.style.top) + 10 + "px";
          }
      }
  }

  function startGame() {
      gameStarted = true;
      startButton.disabled = true;
      document.addEventListener("keydown", handleKeyDown);
  }

  startButton.addEventListener("click", startGame);
});
