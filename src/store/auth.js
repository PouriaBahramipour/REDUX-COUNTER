import { createSlice } from "@reduxjs/toolkit";

const initailAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initailAuthState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = true;
    },
    isLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
