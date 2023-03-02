import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
        state.isLoggedIn = false;
      },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = appStateSlice.actions;

export default appStateSlice.reducer;
