// ## Task 1: Logic

let playerMove = prompt ("Please choose rock, paper or scissors");

let computerMove = "rock"
console.log("playerMove")

if (playerMove === "rock" && computerMove === "rock"){
    console.log ("Draw");
}

if (playerMove === "paper" && computerMove === "rock"){
    console.log ("Well done, you won!");
}

if (playerMove === "scissors" && computerMove === "rock"){
    console.log ("You're rubbish!");
}

if (playerMove === "rock" && computerMove === "paper"){
    console.log ("You're rubbish!");
}

if (playerMove === "paper" && computerMove === "paper"){
    console.log ("Draw");
}

if (playerMove === "scissors" && computerMove === "paper"){
    console.log ("Well done, you won!");
}

if (playerMove === "rock" && computerMove === "scissors"){
    console.log ("Well done, you won!");
}

if (playerMove === "paper" && computerMove === "scissors"){
    console.log ("You're rubbish!");
}

if (playerMove === "scissors" && computerMove === "scissors"){
    console.log ("Draw");
}
