import { createSlice } from "@reduxjs/toolkit";

const Flower = createSlice({
  name: "flower",
  initialState: {
    flowerDetail: "",
  },
  reducers: {
    setFlowerDetail: (state, action) => {
      state.flowerDetail = action.payload;
    },
  },
});

export const { setFlowerDetail } = Flower.actions;
export default Flower.reducer;
