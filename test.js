function generateCompMove() {
    let compMoves = ["rock", "paper", "scissors"];
    let r = Math.floor(math.random() * 3);
    return compMoves[r]
};

console.log (generateCompMove)
