'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let colors = require('colors');

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  let solutionArray = solution.split('');
  let guessArray = guess.toLowerCase().split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations += 1;
      solutionArray[i] = null;
    }
  }
  for (let j = 0; j < solutionArray.length; j++) {
    let targetIndex = guessArray.indexOf(solutionArray[j]);
    if (targetIndex > -1) {
      correctLetters += 1;
      solutionArray[j] = null;
    }
  }
  //! colors. is failing tests because it does not match expected output
  // return colors.red(correctLetterLocations) + colors.green('-') + colors.white(correctLetters);
  return correctLetterLocations + '-' + correctLetters;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  let checkLetterSubmissions = guess.toLowerCase().split('');
    // });
  for (let z = 0; z < checkLetterSubmissions.length; z++) {
    if (letters.indexOf(checkLetterSubmissions[z]) === -1) {
      console.log('Only use letters a through h!');
      return 'Only use letters a through h!';
    }
  }
  //TODO: Simplify nested for loop
  //? forEach doesn't respect return... How can I stop a forEach function when condition is met?
  // checkLetterSubmissions.forEach(function(val) {
  //   if (letters.indexOf(val) === -1) {
  //     console.log('Only use letters a through h!');
  //     return 'Only use letters a through h!';
  //   }
  if (guess.length !== 4) {
    console.log('Use 4 letters only!');
    return 'Use 4 letters only!';
  } else if (guess == solution) {
    console.log('You guessed it!');
    return 'You guessed it!';
  } else {
    generateHint(solution, guess);
    let hint = generateHint(solution, guess);
    board.push(guess.toString() + ' ' + hint.toString());
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
    it('should only allow 4 letters', () => {
      assert.equal(mastermind('abcde'), 'Use 4 letters only!');
    });
    it('should only take letters a through h', () => {
      assert.equal(mastermind('wxyz'), 'Only use letters a through h!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      //! test does not pass because only 1 argument
      // assert.equal(generateHint('abdc'), '2-2');
      assert.equal(generateHint(solution, 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      //! test does not pass because only 1 argument
      // assert.equal(generateHint('aabb'), '1-1');
      assert.equal(generateHint(solution, 'aabb'), '1-1');
    });
    it('should display the correct number of correctly located letters', () => {
      assert.equal(generateHint(solution, 'abcf'), '3-0');
    });
    it('should display the number of matching letters that are not located corectly', () => {
      assert.equal(generateHint(solution, 'badc'), '0-4');
    });
  });

} else {

  generateSolution();
  getPrompt();
}
