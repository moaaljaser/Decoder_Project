const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("Encoding a message", () => {
    it("should encode a message by replacing each letter with its corresponding polybius square", () => {
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const actual = polybius("hello world");
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = polybius("Hello World");
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const input = "23513434112251";
      const actual = polybius(input, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybius("42", false);
      expect(actual).to.include.oneOf(["i", "j"]);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "235134341122514";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });
  });
});
