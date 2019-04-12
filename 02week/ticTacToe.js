'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == 'X' && board[i][1] == 'X' && board[i][2] == 'X' ) {
      console.log('X Wins');
      return true;
    } else if (board[i][0] == 'O' && board[i][1] == 'O' && board[i][2] == 'O' ) {
      console.log('O Wins!');
      return true;
    }
  }
}

function verticalWin() {
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') {
      console.log('X Wins!');
      return true;
    } else if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O') {
      console.log('O Wins!');
      return true;
    }
  }
}

function diagonalWin() {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    console.log('X Wins!');
    return true;
  } else if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X') {
    console.log('X Wins!');
    return true;
  } else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    console.log('O Wins!');
    return true;
  } else if (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O') {
    console.log('O Wins!');
    return true;
  }
}

function checkForWin() {
  if(horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    return true;
  }
}

function ticTacToe(row, column) {
  if(board[row][column] === ' ') {
    board[row][column] = playerTurn;
    if(playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }
    checkForWin();
  } else {
    return "space not available";
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for top line horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for middle line horizontal wins', () => {
      board = [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for bottom line horizontal wins', () => {
      board = [ [' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X'] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}