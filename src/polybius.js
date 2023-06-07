const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
      12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
      13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
      14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
      15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
    };
  
    let result = "";
    input = input.toLowerCase();
  
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          result += " ";
        } else if (char === "i" || char === "j") {
          result += "42";
        } else {
          const encodedChar = Object.entries(polybiusSquare).find(([key, value]) => value === char);
          result += encodedChar ? encodedChar[0] : "";
        }
      }
    }  else { 
        const decodedWithoutSpaces = input.replace(/ /g, "");
      if (decodedWithoutSpaces.length % 2 !== 0) {
        return false;
      }
      let i = 0;
      while (i < input.length) {
        if (input[i] === " ") {
          result += " ";
          i++;
          continue;
        }
  
        const pair = input.slice(i, i + 2);
        if (pair === "42") {
          result += "(i/j)";
        } else {
          const decodedChar = polybiusSquare[pair];
          result += decodedChar ? decodedChar : "";
        }
  
        i += 2;
      }
      
    }
  
    return result;
  }
    return {polybius};
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
