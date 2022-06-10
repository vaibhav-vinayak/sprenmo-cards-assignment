const { CARD_BACKGROUNDS } = require("common/constants");

describe("Test constants", () => {
  it("Test background colors", () => {
    expect(CARD_BACKGROUNDS).toEqual(
      expect.arrayContaining([expect.any(String)])
    );
  });
});
