import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name: "authentication",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = Login.actions;
export default Login.reducer;
