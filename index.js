"use strict;"

const dodger = document.getElementById("dodger");
const moveLyd = document.getElementById("movelyd");
const gameOverLyd = document.getElementById("gameoverlyd");
const gameLyd = document.getElementById("gamelyd");

function playSoundOnMovement() {
    moveLyd.currentTime = 0;
    moveLyd.play();
}
function playGameOver() {
    console.log(gameOverLyd.duration);
    gameOverLyd.currentTime = 3;
    gameOverLyd.play();
    setTimeout(() => {
        gameOverLyd.pause();
        gameOverLyd.currentTime = 0;  // Reset to start if needed
    }, 3500);
}
function playGame() {
    // gameLyd.currentTime = 0;
    gameLyd.play();
}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    dodger.style.transform = "scaleX(-1)";

    if (left > 0) {  
      dodger.style.left = `${left - 5}px`;
    }
    if (left === 0) {
        playGameOver();
        
        dodger.style.transform = "rotate(720deg)";
        dodger.style.transition = "transform 1s";
        setTimeout(() => {
            dodger.style.transition = "";
        }, 1000);
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    
    dodger.style.transform = "rotate(0deg)";

    if (right < 360) { // 400 is the width of the game board, 40 is the width of the dodger
      dodger.style.left = `${right + 5}px`;
    }
    if (right === 360) {
        playGameOver();
        
        dodger.style.transform = "rotate(720deg)";
        dodger.style.transition = "transform 1s";
        setTimeout(() => {
            dodger.style.transition = "";
        }, 1000);
    }
}

function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px", "");
    const up = parseInt(upNumbers, 10);
    
    dodger.style.transform = "rotate(-90deg)";

    if (up < 360) {
      dodger.style.bottom = `${up + 5}px`;
    }
    if (up === 360) {
        playGameOver();
        
        dodger.style.transform = "rotate(720deg)";
        dodger.style.transition = "transform 1s";
        setTimeout(() => {
            dodger.style.transition = "";
        }, 1000);
    }
}

function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.replace("px", "");
    const down = parseInt(downNumbers, 10);
    
    dodger.style.transform = "rotate(90deg)";

    if (down > 0) {
      dodger.style.bottom = `${down - 5}px`;
    }
    if (down === 0) {
        playGameOver();
        
        dodger.style.transform = "rotate(720deg)";
        dodger.style.transition = "transform 1s";
        setTimeout(() => {
            dodger.style.transition = "";
        }, 1000);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
        // playSoundOnMovement();
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight();
        // playSoundOnMovement();
    }
    
    if (event.key === "ArrowUp") {
        moveDodgerUp();
        // playSoundOnMovement();
    }

    if (event.key === "ArrowDown") {
        moveDodgerDown();
        // playSoundOnMovement();
    }
});


