let timeLeft = 45;
let timerInterval;  
let currentWindmillStage = 1;
let currentTownStage = 0;
let clickCount = 0; 


document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('title-and-instructions').style.display = 'none'; 
    
    startTimer();
});


function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById('time-display').textContent = --timeLeft;
        if (timeLeft <= 0) {
            endGame(false);  
        }
    }, 1000);
}

function generateWind() {
    if (timeLeft === 0) return;

    
    currentWindmillStage = currentWindmillStage < 4 ? currentWindmillStage + 1 : 1;
    document.getElementById('windmill').style.backgroundImage = `url('../photos/windmill${currentWindmillStage}.png')`;

   
    clickCount++;
    if (clickCount % 25 === 0 && currentTownStage < 5) {
        currentTownStage++;
        let townStage = currentTownStage < 5 ? `partial${currentTownStage}` : 'fullylit';
        document.getElementById('town').className = townStage;
        console.log("Town stage updated to: " + townStage); 

        
        if (currentTownStage === 5) {
            endGame(true);  
        }
    }
}

function endGame(win) {
    clearInterval(timerInterval); 

    document.getElementById('game').style.display = 'none'; 

    let gameOverMessage = document.getElementById('game-over-message');
    gameOverMessage.textContent = win ? 'You win!' : 'Game over.';

    let gameOverScreen = document.getElementById('game-over');
    gameOverScreen.style.display = 'block';
}

function restartGame() {

    clearInterval(timerInterval);

    timeLeft = 45;
    currentWindmillStage = 1;
    currentTownStage = 0;
    clickCount = 0;

    document.getElementById('windmill').style.backgroundImage = "url('../photos/windmill1.png')";
    document.getElementById('town').style.backgroundImage = "url('../photos/unlittown.png')";
    document.getElementById('town').style.display = 'block';
    document.getElementById('windmill').style.display = 'block'; 

    document.getElementById('time-display').textContent = timeLeft;

    document.getElementById('game-over').style.display = 'none';
    document.getElementById('win-message').style.display = 'none';
    document.getElementById('lose-message').style.display = 'none';

    document.getElementById('game').style.display = 'block';

    startTimer();
}


