"use strict;"

function pigLatin(word) {

    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let trimmedWord = word.toLowerCase().trim().split("");
  
    const findSpace = (spc) => {
      return spc == " ";
    }
  
    if (trimmedWord.findIndex(findSpace) !== -1) {
      let wordTwoIndex = trimmedWord.findIndex(findSpace);
      let secondWord = trimmedWord.splice(wordTwoIndex + 1);
      let spaceElement = trimmedWord.splice(wordTwoIndex);
      return changeWords(trimmedWord) + spaceElement + changeWords(secondWord);
    } else {
      return changeWords(trimmedWord);
    }
  
    function changeWords(val) {
      for (let i = 0; i < vowelLetters.length; i++) {
        if (vowelLetters[i] == val[0]) {
          val.push('y', 'a', 'y');
          return val.join("");
        }
      };
  
      const findVowelIndex = (vow) => {
        return vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u";
      }
      let vowelIndex = val.findIndex(findVowelIndex);
      let vowelEnd = val.splice(0, vowelIndex);
      val.push(vowelEnd.join(""), 'a', 'y');
      return val.join("");
    }
  }