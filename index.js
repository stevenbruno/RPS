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

    switch (winner) {
        case 0: return `It's a tie! The computer chose ${computerSelection}`;
        case 1: return `You won! The computer chose ${computerSelection}`;
        case 2: return `You lost! The computer chose ${computerSelection}`;
    }
}


