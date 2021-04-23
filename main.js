let gamesPlayed = 0;

function playGame() {

gamesPlayed++;
console.log (gamesPlayed);

let player1 = "";
let player2 =  "rock";

player1 = prompt ("Please choose rock, paper or scissors");
if (prompt = false){
    anotherPlay = false;
};


while ((player1 !== ("rock")) && (player1 !== ("paper")) && (player1 !== ("scissors"))) {
    player1 = prompt ("Invalid choice. Please choose rock, paper or scissors.")
    if (prompt = false){
        anotherPlay = false;
    }
};

console.log(player1);

function generateCompMove() {
    let compMoves = ["rock", "paper", "scissors"];
    let r = [Math.floor(Math.random() * 3)];
    return compMoves[r]
};

player2 = generateCompMove();

console.log (player2);

function getWinner(player1, player2) {
    if (player1 === "rock" && player2 === "rock"){
        return `0`;
    }
    if (player1 === "paper" && player2 === "rock"){
        return `1`;
    }
    if (player1 === "scissors" && player2 === "rock"){
        return `-1`;
    }
    if (player1 === "rock" && player2 === "paper"){
        return `-1`;
    }
    if (player1 === "paper" && player2 === "paper"){
        return `0`;
    }
    if (player1 === "scissors" && player2 === "paper"){
        return `1`;
    }
    if (player1 === "rock" && player2 === "scissors"){
        return `1`;
    }
    if (player1 === "paper" && player2 === "scissors"){
        return `-1`;
    }
    if (player1 === "scissors" && player2 === "scissors"){
        return `0`;
    }
};

let outcome = getWinner(player1, player2);

let wordoutcome = ("");

if (outcome == 1){
    wordoutcome = "WINNER!";
} else if (outcome == 0) {
    wordoutcome = "DRAW!";
} else if (outcome == -1){
    wordoutcome = "LOSER!";
}

alert(`You chose ${player1}, the computer chose ${player2}. The outcome of this game is ${wordoutcome}`)

anotherPlay =  confirm("Would you like to play again?");
}

let anotherPlay = true;

while (anotherPlay === true){
    playGame()
}
