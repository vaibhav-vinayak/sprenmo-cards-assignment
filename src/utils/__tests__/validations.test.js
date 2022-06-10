import { isValidName } from "utils/validations";

describe("Tests Validations", () => {
  it("isValidName", () => {
    expect(isValidName("Card")).toBe(true);
  });
});
