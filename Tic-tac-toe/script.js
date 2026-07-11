const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restart = document.getElementById("restart");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(function(cell){
    cell.addEventListener("click", playGame);
});

restart.addEventListener("click", resetGame);

function playGame(){

    let index = this.getAttribute("data-index");

    if(board[index] != "" || gameOver){
        return;
    }

    board[index] = currentPlayer;
    this.innerHTML = currentPlayer;

    checkWinner();

    if(!gameOver){

        if(currentPlayer == "X"){
            currentPlayer = "O";
        }
        else{
            currentPlayer = "X";
        }

        status.innerHTML = "Player " + currentPlayer + "'s Turn";
    }

}

function checkWinner(){

    for(let i=0;i<win.length;i++){

        let a = win[i][0];
        let b = win[i][1];
        let c = win[i][2];

        if(board[a] != "" &&
           board[a] == board[b] &&
           board[b] == board[c]){

            status.innerHTML = "Player " + currentPlayer + " Wins";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    for(let i=0;i<board.length;i++){
        if(board[i] == ""){
            draw = false;
        }
    }

    if(draw){
        status.innerHTML = "Match Draw";
        gameOver = true;
    }

}

function resetGame(){

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    status.innerHTML = "Player X's Turn";

    cells.forEach(function(cell){
        cell.innerHTML = "";
    });

}