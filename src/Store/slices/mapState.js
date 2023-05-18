import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserLoc: { latitude: null, longitude: null },
};

export const mapStateSlice = createSlice({
  name: "mapState",
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.currentUserLoc = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
  },
});

// Action creator is generated for the setUserLocation reducer function
export const { setUserLocation } = mapStateSlice.actions;

export default mapStateSlice.reducer;
