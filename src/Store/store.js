import { configureStore } from '@reduxjs/toolkit'
import {logger} from "redux-logger";

import appReducer from './slices/appState';

export const store = configureStore({
  reducer: {
    appState: appReducer
  },
  middleware: [logger]
})