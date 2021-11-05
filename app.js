// game function 
const game = () => {

    let Pscore = 0;
    let Cscore = 0;

    const winner = document.querySelector(".winner");
    const introH1 = document.querySelector(".intro h1");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    // start the game button
    const startGame = () => {

        const playBtn = document.querySelector(".intro button");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.replace("fadeOut", "fadeIn");
            Pscore = 0;
            Cscore = 0;
            playerScore.textContent = Pscore;
            computerScore.textContent = Cscore;
        });
    };
    // update score and check game finishing
    const updateScore = () => {
        // update text 
        playerScore.textContent = Pscore;
        computerScore.textContent = Cscore;
        // check if finished game
        if (Pscore === 10) {
            introScreen.classList.replace("fadeOut", "fadeIn");
            match.classList.replace("fadeIn", "fadeOut");
            introH1.textContent = "Game Finished! You Win! let's Play Again?"
        }
        if (Cscore === 10) {
            introScreen.classList.replace("fadeOut", "fadeIn");
            match.classList.replace("fadeIn", "fadeOut");
            introH1.textContent = "Game Finished! Computer Win! let's Play Again?";
        }
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        // computer Options
        const copmuterOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function() {
                // computer choices
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = copmuterOptions[computerNumber];
                // call compareHands function
                compareHands(this.textContent, computerChoice);
                // update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };
    // check who win hand
    const compareHands = (playerChoice, computerChoice) => {
        
        // check for tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }
        // check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors"){
                winner.textContent = "Player Win";
                Pscore++;
                updateScore();
                return;
            }else {
                winner.textContent = "computer Win";
                Cscore++;
                updateScore();
                return;
            }
        }
        // check for paper 
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player Win";
                Pscore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Win";
                Cscore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Win";
                Pscore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Win";
                Cscore++;
                updateScore();
                return;
            }
        }
    }
    // call functions 
    startGame();
    playMatch();
}
// call game function
game();