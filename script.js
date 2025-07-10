let humanScore = 0
let computerScore = 0

const body = document.querySelector('body')

const results = document.createElement('div')
const rock = document.createElement('button')
const paper = document.createElement('button')
const scissors = document.createElement('button')

rock.innerText ='rock'
paper.innerText = 'paper'
scissors.innerText = 'scissors'

body.appendChild(results)
body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)



//randomized choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if( choice == 0) return 'rock'
    else if ( choice ==1) return 'paper'
    else return 'scissors'
}

/*choice on click
function getHumanChoice() {
    let choice = prompt("Choose “rock”, “paper” or “scissors”: ")
    return choice.toLowerCase() 
}
*/

function playRound(humanChoice, computerChoice) {
        results.innerText = ''
        if(humanChoice === computerChoice){ results.innerText += 'It is a draw!'

        } else if (
            humanChoice === 'paper' && computerChoice==='scissors' ||
            humanChoice === 'rock' && computerChoice==='paper' ||
            humanChoice === 'scissors' && computerChoice==='rock') {
            results.innerText += `You lose! ${computerChoice} beats ${humanChoice}`
            computerScore ++
        } else {
            results.innerText +=  `You win! ${humanChoice} beats ${computerChoice}`
            humanScore ++
        }
        updateGame()
}

function playGame(){
    /*for(let i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }*/
    
    rock.addEventListener('click', () => playRound('rock', getComputerChoice()))
    paper.addEventListener('click', () => playRound('paper', getComputerChoice()))
    scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))
    
    //declare winner
    
    /*
    if (humanScore > computerScore) { console.log('You won this match!')}
    else if (humanScore < computerScore) { console.log('Computer won this match!')}
    else { console.log('No winner!')}
    */
    }

function updateGame(){
    if(humanScore <5  && computerScore<5) {
    results.innerText += `\nRunning Score: ${humanScore}/${computerScore}`
    }
    else if(humanScore>computerScore){
        results.innerText += `\nRunning Score: ${humanScore}/${computerScore}
        human won!`
    }
    else{
        results.innerText += `\nRunning Score: ${humanScore}/${computerScore}
        computer won!`  
    }
}


playGame()