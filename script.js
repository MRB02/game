const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')


const possibleChoices = document.querySelectorAll('button');

let userchoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {

    userchoice = e.target.id

    userChoiceDisplay.innerHTML = userchoice;

    getComputerChoiceRandomly()

    showwinner()
}))


function getComputerChoiceRandomly() {

    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;


    if (randomNumber === 1) {
        computerChoice = 'rock';

    }
    if (randomNumber === 2) {
        computerChoice = 'paper';

    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';

    }

    computerChoiceDisplay.innerHTML = computerChoice;

}

function showwinner() {


    if (userchoice == "rock" && computerChoice == "rock") {

        resultDisplay.innerHTML = 'draw';
    }
    if (userchoice == "rock" && computerChoice == "paper") {

        resultDisplay.innerHTML = 'Computer Wins';
    }
    if (userchoice == "rock" && computerChoice == "scissors") {

        resultDisplay.innerHTML = 'User Wins';
    }
    if (userchoice == "paper" && computerChoice == "paper") {

        resultDisplay.innerHTML = 'draw';
    }

    if (userchoice == "paper" && computerChoice == "rock") {

        resultDisplay.innerHTML = 'User Wins';
    }
    if (userchoice == "paper" && computerChoice == "scissors") {

        resultDisplay.innerHTML = 'Computer Wins';
    }
    if (userchoice == "scissors" && computerChoice == "paper") {

        resultDisplay.innerHTML = 'User wins';
    }

    if (userchoice == "scissors" && computerChoice == "scissors") {

        resultDisplay.innerHTML = 'draw';
    }
    if (userchoice == "scissors" && computerChoice == "rock") {

        resultDisplay.innerHTML = 'Computer Wins';
    }

}