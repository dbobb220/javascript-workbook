'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let colors = require('colors'); 

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// moves last block from startStack to endStack

function movePiece(arr1, arr2) {
  stacks[`${arr2}`].push(stacks[`${arr1}`].pop()) 
}

// checks startStack is not empty
// checks if startStack is less than endStack
// accounts for undefined < 1 returning from false from line above

function isLegal(arr1, arr2) { 
  return !stacks[`${arr1}`].length ? false
  : stacks[`${arr2}`].slice(-1) > stacks[`${arr1}`].slice(-1) ? true
  : !stacks[`${arr2}`].length ? true
  : false
}

// creates false hasWon varaiable
// checks each stack to see if user has 4 values in array
// changes hasWon to true

function checkForWin() {
  let hasWon = false;
  for (let x in stacks) {
   stacks[x].length > 3 ? hasWon = true : false;
  }
  return hasWon;
}

// checks if move is legal, if false console message
// if true, move the piece
// check for the win and return message if true, if false - do nothing

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack) === false) {
    return console.log(colors.red('Invalid Move!'));
  } else {
    movePiece(startStack, endStack);
    if (checkForWin() === true) {
      return console.log(colors.red('You won!'));
    };
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    it('let user know of invalid move in the console', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(towersOfHanoi('a', 'b'), console.log(colors.red('Invalid Move!')));
    });
    it('let user they won in the console', () => {
      stacks = {
        a: [],
        b: [1],
        c: [4, 3, 2]
      };
      assert.equal(towersOfHanoi('b', 'c'), console.log(colors.red('You won!')));
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    it('should not allow empty stack as startStack', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('c', 'b'), false);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win in stack b', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should detect a win in stack c', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });

} else {

  getPrompt();

}
