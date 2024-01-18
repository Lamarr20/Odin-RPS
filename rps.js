function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(shake) {
   
    switch (shake) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return"sicssors";
    }
}
function startGame (myThrow, computerThrow) {
    if(myThrow == computerThrow) {
        console.log("tie")
    } else if(
    (myThrow == 'rock' && computerThrow == 'scissors') ||
    (myThrow == 'paper' && computerThrow == 'rock') ||
    (myThrow == 'scissors' && computerThrow == 'paper')
    ) {
        console.log("player wins")}
    else {
        console.log("Computer Wins")
    }

}
let shake = getRandomInt(3)
let computerThrow = getComputerChoice(shake)
console.log("am i working")
const myThrow = prompt("please enter Rock, Paper, Scissors").toLowerCase()
startGame(myThrow, computerThrow)




