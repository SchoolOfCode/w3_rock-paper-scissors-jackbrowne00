function generateCompMove() {
    let compMoves = ["rock", "paper", "scissors"];
    let r = Math.floor(math.random() * 3);
    return compMoves[r]
};

player2 = generateCompMove();






// console.log (player1);

let compRandNum = Math.floor(Math.random() * 3);

// console.log (compRandNum);

compMoves = ["rock", "paper", "scissors"];
player2 = compMoves[compRandNum];

// console.log (player2)
