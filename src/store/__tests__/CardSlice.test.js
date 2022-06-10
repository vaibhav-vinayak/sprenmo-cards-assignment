import reducer, { addCard } from "store/CardsSlice";

const initialState = [
  {
    card_name: "STEVE ROGERS",
    card_last_four: "4813",
    expiry: "03/26",
    colour: "#000000",
  },
  {
    card_name: "PETER PARKER",
    card_last_four: "9745",
    expiry: "08/25",
    colour: "#19a89a",
  },
];

describe("should return the initial state", () => {
  it("Test initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("Test addCard", () => {
    const newCard = {
      card_name: "STEPHEN STRANGE",
      card_last_four: "5478",
      expiry: "07/26",
      colour: "#7a24bf",
    };
    expect(reducer(undefined, addCard(newCard))).toEqual([
      newCard,
      ...initialState,
    ]);
  });
});
