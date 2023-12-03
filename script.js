// Get references to the DOM elements
const ballElement = document.getElementById('ball');
const paddleLeftElement = document.getElementById('paddle-left');
const paddleRightElement = document.getElementById('paddle-right');
const scoreboardElement = document.getElementById('scoreboard');
const playButtonElement = document.getElementById('play-button');

// Initialize game variables
let ballX = 0;
let ballY = 0;
let ballXDirection = 1;
let ballYDirection = 1;

let paddleLeftY = 0;
let paddleRightY = 0;

let player1Score = 0;
let player2Score = 0;

const ballSpeed = 5;
const paddleSpeed = 10;

// Function to play paddle hit sound
const playPaddleHitSound = () => {
  const audioElement = document.getElementById('audio-paddle-hit');
  audioElement.play();
};

// Function to play wall hit sound
const playWallHitSound = () => {
  const audioElement = document.getElementById('audio-wall-hit');
  audioElement.play();
};

// Function to update the game state
const update = () => {
  // Update ball position
  ballX += ballXDirection * ballSpeed;
  ballY += ballYDirection * ballSpeed;

  // Check for collisions with walls
  if (ballY < 0 || ballY > 400 - ballElement.
