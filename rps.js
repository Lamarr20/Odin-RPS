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
    }
    if(myThrow == 'rock' && computerThrow == 'sicssors') {

    console.log("player wins")}
    if(myThrow == 'paper' && computerThrow == 'rock') {

        console.log("player wins")}
    if(myThrow == 'sicssors' && computerThrow == 'paper') {

    console.log("player wins")}
    if(myThrow == 'rock' && computerThrow == 'paper') {

        console.log("computer wins")}
        if(myThrow == 'paper' && computerThrow == 'sicssors') {
    
            console.log("computer wins")}
        if(myThrow == 'sicssors' && computerThrow == 'rock') {
    
        console.log("computer wins")}

}
let shake = getRandomInt(3)
let computerThrow = getComputerChoice(shake)
console.log("am i working")
const myThrow = prompt("please enter Rock, Paper, Sicssor").toLowerCase()
startGame(myThrow, computerThrow)




