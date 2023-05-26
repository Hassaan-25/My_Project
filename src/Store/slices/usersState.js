import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersStateSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creator is generated for the setUsers reducer function
export const { setUsers } = usersStateSlice.actions;

export default usersStateSlice.reducer;
