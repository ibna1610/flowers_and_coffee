import { createSlice } from "@reduxjs/toolkit";

const Drink = createSlice({
  name: "drink",
  initialState: {
    drinkDetail: "",
  },
  reducers: {
    setDrinkDetail: (state, action) => {
      state.drinkDetail = action.payload;
    },
  },
});

export const { setDrinkDetail } = Drink.actions;
export default Drink.reducer;
