import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import appReducer from "./slices/appState";
import mapReducer from "./slices/mapState";

export const store = configureStore({
  reducer: {
    appState: appReducer,
    mapState: mapReducer,
  },
  middleware: [logger],
});
