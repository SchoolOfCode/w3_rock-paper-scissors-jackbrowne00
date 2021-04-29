let gamesPlayed = 0;
let wingames = 0;
let drawgames = 0;
let losegames = 0;

let anotherPlay = true;

function playGame() {

let player1 = "";
let player2 =  "rock";

player1 = prompt ("Please choose rock, paper or scissors");

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
        drawgames++;
        return `0`;
    }
    if (player1 === "paper" && player2 === "rock"){
        wingames++;
        return `1`;
    }
    if (player1 === "scissors" && player2 === "rock"){
        losegames++;
        return `-1`;
    }
    if (player1 === "rock" && player2 === "paper"){
        losegames++;
        return `-1`;
    }
    if (player1 === "paper" && player2 === "paper"){
        drawgames++;
        return `0`;
    }
    if (player1 === "scissors" && player2 === "paper"){
        wingames++;
        return `1`;
    }
    if (player1 === "rock" && player2 === "scissors"){
        wingames++;
        return `1`;
    }
    if (player1 === "paper" && player2 === "scissors"){
        losegames++;
        return `-1`;
    }
    if (player1 === "scissors" && player2 === "scissors"){
        drawgames++;
        return `0`;
    }
};

gamesPlayed++;
console.log (gamesPlayed);

let outcome = getWinner(player1, player2);

let wordoutcome = ("");

if (outcome == 1){
    wordoutcome = "Won";
} else if (outcome == 0) {
    wordoutcome = "Drew";
} else if (outcome == -1){
    wordoutcome = "Lost";
}

alert(`You chose ${player1}, the computer chose ${player2}. You ${wordoutcome} this round. Out of the ${gamesPlayed} games you have played, you have won ${wingames} games, drew ${drawgames} and lost ${losegames}.`)

anotherPlay =  confirm("Would you like to play again?");
}

while (anotherPlay === true){
    playGame()
}
