function computerPlay() {
    let hands = ['Rock', 'Paper', 'Scissors']
    let hand = hands[Math.floor(Math.random()*hands.length)]
    return hand;
}


function playRound(playerSelection, computerSelection) {
    let winner = 0;
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock': winner = 0; break;
                case 'paper': winner = 2; break;
                case 'scissors': winner = 1; break; 
            }
        break;
        case 'paper':
            switch (computerSelection) {
                case 'rock': winner = 1; break;
                case 'paper': winner = 0; break;
                case 'scissors': winner = 2; break; 
            }
        break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock': winner = 2; break;
                case 'paper': winner = 1; break;
                case 'scissors': winner = 0; break; 
            }
        break;
    }
    
    updateScore(winner);

    switch (winner) {
        case 0: return `It's a tie! The computer chose ${computerSelection}.`;
        case 1: return `You won! The computer chose ${computerSelection}.`;
        case 2: return `You lost! The computer chose ${computerSelection}.`;
    }
}


function chooseRock() {
    document.getElementById('result').innerHTML = playRound('Rock', computerPlay())
}

function choosePaper() {
    document.getElementById('result').innerHTML = playRound('Paper', computerPlay());
}

function chooseScissors() {
    document.getElementById('result').innerHTML = playRound('Scissors', computerPlay())
}


function updateScore(winner) {
    let playerScore = Number(document.getElementById('playerScore').innerHTML);
    let cpuScore = Number(document.getElementById('cpuScore').innerHTML);

    if (winner == 1) {
        playerScore ++;
        document.getElementById('playerScore').innerHTML = playerScore.toString();
    }
    if (winner == 2) {
        cpuScore ++;
        document.getElementById('cpuScore').innerHTML = cpuScore.toString();
    }
}