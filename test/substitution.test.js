const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message using the substitution cipher", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should decode a message using the substitution cipher", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other non-alphabetic symbols", () => {
    const actual = substitution("You are an excellent coder!", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj ylqmh!";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("You are an excellent coder!", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj ylqmh!";
    expect(actual).to.equal(expected);
  });

  it("should return false if the alphabet parameter is missing or invalid", () => {
    expect(substitution("thinkful")).to.be.false;
    expect(substitution("thinkful", "abc")).to.be.false;
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibevx")).to.be.false;
  });

  it("should return false if the input contains duplicate characters in the alphabet parameter", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibex")).to.be.false;
  });
});
