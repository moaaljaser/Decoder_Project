const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  describe("error handling", () => {
    it("should return false if shift value is invalid", () => {
      const actual1 = caesar("thinkful");
      const actual2 = caesar("thinkful", 99);
      const actual3 = caesar("thinkful", -26);
      expect(actual1).to.be.false;
      expect(actual2).to.be.false;
      expect(actual3).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const actual = caesar("thinkful", 3);
      const expected = "wklqnixo";
      expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", () => {
      const actual = caesar("hello, world!", 5);
      const expected = "mjqqt, btwqi!";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = caesar("HELLO", 1);
      const expected = "ifmmp";
      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const actual = caesar("zoo", 1);
      const expected = "app";
      expect(actual).to.equal(expected);
    });

   it("should handle a negative shift to the left", () => {
  const actual = caesar("thinkful", -5);
  const expected = "ocdifapg";
  expect(actual).to.equal(expected);
});
   });
  describe("decoding a message", () => {
    it("should return decoded message with negative shift", () => {
      const actual = caesar("wklqnixo", -3);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

   it("should handle shifts that go beyond the alphabet length", () => {
  const actual = caesar("thinkful", 30);
  const expected = false;
  expect(actual).to.equal(expected);
    });
  });
});