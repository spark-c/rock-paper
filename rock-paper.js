// rock-paper-scissors
// Collin Sparks, created 5-10-2020

function getComputerPick() {
    let choice = randomNumber(1, 4);
    console.log(`choice is ${choice}`);
    if(choice === 1) {
        let computerPick = 'rock'
        return computerPick;
    } else if(choice === 2) {
        let computerPick = 'paper';
        return computerPick;
    } else if(choice === 3) {
        let computerPick = 'scissors'
        return computerPick;
    }
}

function randomNumber(min, max) {  
    let result = Math.random() * (max - min) + min;
    console.log(result);
    return Math.floor(result);
} 

function getPlayerPick() {
    do{
        //let input = input
    }
    while(validateInput(input) === false) {
        let input = input
    }
    return input
}

function playRound(input=getPlayerPick()) {
    if(validateInput(input) === false) {
        return 'Invalid input'
    } else {
        let computerPick = getComputerPick();
        outcome = getOutcome(input, computerPick);
        return outcome;
    }
}

function validateInput(input) {
    input = input.toLowerCase();
    if(input === 'rock' || input === 'paper' || input === 'scissors') {
        return true;
    } else {
        return false;
    }
}

function getOutcome(userPick, computerPick) {
    if(userPick === 'rock') {
        if(computerPick === 'paper') {
            return 'You lose! Paper beats rock.';
        } else if(computerPick === 'scissors') {
            return 'You win! Rock beats scissors.';
        } else {
            return 'Stalemate!';
        }
    } else if(userPick === 'paper') {
        if(computerPick === 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else if(computerPick === 'rock') {
            return 'You win! Paper beats rock.';
        } else {
            return 'Stalemate!';
        }
    } else {
        if(computerPick === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else if(computerPick === 'paper') {
            return 'You win! Scissors beats paper.';
        } else {
            return 'Stalemate!';
        }
    }
}

function game() {

}

console.log('Welcome!');
