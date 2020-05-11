// rock-paper-scissors
// Collin Sparks, created 5-10-2020

function getComputerPick() {
    let choice = randomNumber(1, 4);
    //console.log(`choice is ${choice}`);
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
    //console.log(result);
    return Math.floor(result);
} 

function getPlayerPick() {
    let userInput = prompt('Your choice:');
    return userInput
}

function playRound() {
    let valid = false;
    var input = ''
    while(valid === false) {
        input = getPlayerPick();
        valid = validateInput(input);
    }
    let computerPick = getComputerPick();
    outcome = getOutcome(input, computerPick);
    return outcome;
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
            let winner = 'Computer';
            let msg = 'Round loss!! Paper beats rock.';
            return [winner,msg];
        } else if(computerPick === 'scissors') {
            let winner = 'Player';
            let msg = 'Round win!! Rock beats scissors.';
            return [winner,msg];
        } else {
            let winner = null;
            let msg = 'Stalemate!';
            return [winner,msg];
        }
    } else if(userPick === 'paper') {
        if(computerPick === 'scissors') {
            let winner = 'Computer';
            let msg = 'Round loss!! Scissors beats paper.';
            return [winner,msg];
        } else if(computerPick === 'rock') {
            let winner = 'Player';
            let msg = 'Round win!! Paper beats rock.';
            return [winner,msg];
        } else {
            let winner = null;
            let msg = 'Stalemate!';
            return [winner,msg];
        }
    } else {
        if(computerPick === 'rock') {
            let winner = 'Computer';
            let msg = 'Round loss!! Rock beats scissors.';
            return [winner,msg];
        } else if(computerPick === 'paper') {
            let winner = 'Player';
            let msg = 'Round win!! Scissors beats paper.';
            return [winner,msg];
        } else {
            let winner = null;
            let msg = 'Stalemate!';
            return [winner,msg];
        }
    }
}

function updateScore(outcomeReturn, scoresheet) {
    let winner = outcomeReturn[0];
    let msg = outcomeReturn[1];
    if(winner === null) {
        showScoreboard(msg, scoresheet);
        return scoresheet;
    }
    scoresheet[winner]++;
    showScoreboard(msg, scoresheet);
    return scoresheet
}

function showScoreboard(msg, scoresheet) {
    let round = scoresheet['Round'];
    alert(`${msg}\nScore after Round ${round}:\nPlayer: ${scoresheet.Player}\nComputer: ${scoresheet.Computer}`);
}

function game() {
    var currentScores = {'Player': 0, 'Computer': 0, 'Round': 0};
    for(let i = 1; i < 6; i++) {
        currentScores['Round'] = i
        let result = playRound();
        currentScores = updateScore(result, currentScores);
    }
    while(currentScores.Player === currentScores.Computer) {
        alert('TIEBREAKER ROUND!');
        let result = playRound();
        currentScores = updateScore(result, currentScores);
    }
    if(currentScores.Player > currentScores.Computer) {
        var gameWinner = 'Player';
    } else {
        var gameWinner = 'Computer';
    }
    alert (`${gameWinner} is the winner!!`);
}

console.log('Welcome!');
console.log('Call "game()" to play rock-paper-scissors, Bo5 with tiebreakers.');
