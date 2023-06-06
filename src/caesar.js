// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  
    const inputString = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    let result = "";
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (alphabet.includes(char)) {
        let charIndex = alphabet.indexOf(char);
        let shiftedIndex;
        if (encode) {
          shiftedIndex = (charIndex + shift + 26) % 26;
        } else {
          shiftedIndex = (charIndex - shift + 26) % 26;
        }
        result += alphabet[shiftedIndex];
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  

