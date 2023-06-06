const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const normalizedInput = input.toLowerCase();
    let result = "";

    const uniqueAlphabet = Array.from(new Set(alphabet.split("")));
      if (uniqueAlphabet.length !== 26) {
        return false; }
        
    if (encode) {
      for (let i = 0; i < normalizedInput.length; i++) {
        const currentChar = normalizedInput[i];
        if (currentChar.match(/[a-z]/)) {
          const index = standardAlphabet.indexOf(currentChar);
          const substitutedChar = alphabet[index];
          result += substitutedChar;
        } else {
          result += currentChar;
        }
      }
    } else {
      
      

      for (let i = 0; i < normalizedInput.length; i++) {
        const currentChar = normalizedInput[i];
        if (alphabet.indexOf(currentChar) !== -1) {
          const index = alphabet.indexOf(currentChar);
          const substitutedChar = standardAlphabet[index];
          result += substitutedChar;
        } else {
          result += currentChar;
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

