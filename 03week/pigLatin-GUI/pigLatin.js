"use strict;"

// get input value and convert to array (lowercase, trim)
// code will then run through the pigLatin function for each array value
// the it will convert the pig latin array into a string and return to output via DOM

let getInputValue = function() {
  const pigLatinInput = document.querySelector("#input_pigLatin").value.toLowerCase().trim().split(" ");
  console.log(pigLatinInput);
  let newPigLatinArray = [];
  for (let i = 0; i < pigLatinInput.length; i++) {
    newPigLatinArray.push(pigLatin(pigLatinInput[i]));
  }
  document.querySelector(".output").innerHTML = newPigLatinArray.join(" ");
}

function pigLatin(word) {

    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let trimmedWord = word.split("");
  
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

    return changeWords(trimmedWord);
  }