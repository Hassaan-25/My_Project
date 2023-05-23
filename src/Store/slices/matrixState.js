import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matrixData: [],
};

export const matrixDataSlice = createSlice({
  name: "matrixData",
  initialState,
  reducers: {
    setMatrixData: (state, action) => {
      state.matrixData = action.payload;
    },
  },
});

// Action creator is generated for the setMatrixData reducer function
export const { setMatrixData } = matrixDataSlice.actions;

export default matrixDataSlice.reducer;
