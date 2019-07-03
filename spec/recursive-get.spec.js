const { expect } = require("chai");
const { getLinks } = require("../recursive-get");

describe("getLinks()", () => {
  it("returns a number plus 2", () => {
    expect(getLinks(7)).to.equal(9);
  });
});
