const boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';
const board = Array(9).fill(null);


boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleClick(box, index));
});

function handleClick(box, index) {
    if (!box.innerText && !checkWin(board)) {
        box.innerText = currentPlayer;
        board[index] = currentPlayer;
        if (checkWin(board)) {
            alert(`${currentPlayer} wins!`);
        } else if (board.every(cell => cell)) {
            alert('Draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(board) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

// Reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    board.fill(null);
    boxes.forEach(box => box.innerText = '');
    currentPlayer = 'X';
}
