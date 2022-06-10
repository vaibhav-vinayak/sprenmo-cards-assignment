import { configureStore } from "@reduxjs/toolkit";
import cards from "./CardsSlice";

const store = configureStore({
  reducer: {
    cards,
  },
});

export default store;
