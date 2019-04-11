'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
  let trimmedWord = word.toLowerCase().trim().split("");
  
  const findSpace = (spc) => {
    return spc == " ";
  }

  if (findSpace(trimmedWord) == true) {
    // let wordTwoIndex = trimmedWord.findIndex(findSpace) {
      console.log("you did it!")
  };

    for (let i = 0; i < vowelLetters.length; i++) {
      if (vowelLetters[i] == trimmedWord[0]) {
        trimmedWord.push('y', 'a', 'y');
        return trimmedWord.join("");
      }
    };

    const findVowelIndex = (vow) => {
      return vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u";
    }
    let vowelIndex = trimmedWord.findIndex(findVowelIndex);
    let vowelEnd = trimmedWord.splice(0, vowelIndex);
    trimmedWord.push(vowelEnd.join(""), 'a', 'y');
    return trimmedWord.join("");
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('should separate two words and run them together', () => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
    })
  });
} else {

  getPrompt();

}
