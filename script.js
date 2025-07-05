function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if( choice == 0) return 'rock'
    else if ( choice ==1) return 'paper'
    else return 'scissors'
}

function getHumanChoice() {
    let choice = prompt("Choose “rock”, “paper” or “scissors”: ")
    return choice.toLowerCase() 
}


function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice){ console.log('It is a draw!')

        } else if (
            humanChoice === 'paper' && computerChoice==='scissors' ||
            humanChoice === 'rock' && computerChoice==='paper' ||
            humanChoice === 'scissors' && computerChoice==='rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore ++
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore ++
        }
    }

    for(let i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    //declare winner
    if (humanScore > computerScore) { console.log('You won this match!')}
    else if (humanScore < computerScore) { console.log('Computer won this match!')}
    else { console.log('No winner!')}
}

playGame()