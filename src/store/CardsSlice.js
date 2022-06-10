import { createSlice } from "@reduxjs/toolkit";

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

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
