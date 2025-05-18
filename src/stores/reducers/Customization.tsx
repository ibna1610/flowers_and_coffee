import { createSlice } from "@reduxjs/toolkit";

const Customization = createSlice({
  name: "customization",
  initialState: {
    currentPage: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = Customization.actions;
export default Customization.reducer;
