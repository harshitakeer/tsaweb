let timeLeft = 60;
let timerInterval;  // Declare the timerInterval variable globally to clear it later
let currentWindmillStage = 1;
let currentTownStage = 0;
let clickCount = 0; // Initialize click counter

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';
    startTimer();
});

function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById('time-display').textContent = --timeLeft;
        if (timeLeft <= 0) {
            endGame(false);  // Pass false to indicate game over without winning
        }
    }, 1000);
}

function generateWind() {
    if (timeLeft === 0) return;

    // Update windmill stage and image
    currentWindmillStage = currentWindmillStage < 4 ? currentWindmillStage + 1 : 1;
    document.getElementById('windmill').style.backgroundImage = `url('../photos/windmill${currentWindmillStage}.png')`;

    // Increment click count and update town stage if necessary
    clickCount++;
    if (clickCount % 25 === 0 && currentTownStage < 5) {
        currentTownStage++;
        let townStage = currentTownStage < 5 ? `partial${currentTownStage}` : 'fullylit';
        document.getElementById('town').className = townStage;
        console.log("Town stage updated to: " + townStage); // Debugging log

        // Check if the town is fully lit
        if (currentTownStage === 5) {
            endGame(true);  // Pass true to indicate a win
        }
    }
}

function endGame(win) {
    clearInterval(timerInterval); // Stop the timer


    // Hide the game elements
    document.getElementById('game').style.display = 'none'; // This hides the windmill and the town

    let gameOverMessage = document.getElementById('game-over-message');
    gameOverMessage.textContent = win ? 'You win!' : 'Game over.';

    let gameOverScreen = document.getElementById('game-over');
    gameOverScreen.style.display = 'block';
}

function restartGame() {
    // Clear any existing intervals
    clearInterval(timerInterval);

    // Reset game state variables
    timeLeft = 60;
    currentWindmillStage = 1;
    currentTownStage = 0;
    clickCount = 0;

    // Reset the windmill and town to their initial states
    document.getElementById('windmill').style.backgroundImage = "url('../photos/windmill1.png')";
    document.getElementById('town').className = 'unlit';
    document.getElementById('town').style.display = 'block'; // Make sure town is visible
    document.getElementById('windmill').style.display = 'block'; // Ensure windmill is visible

    // Reset the timer display
    document.getElementById('time-display').textContent = timeLeft;

    // Hide the message box and restart button
    document.getElementById('message-box').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    // Show the game elements
    document.getElementById('game-area').style.display = 'block';

    // Start a new game
    startTimer();
}












  




