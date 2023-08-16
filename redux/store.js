import { configureStore } from "@reduxjs/toolkit";
import ModalsReducer from "./features/modals";

export const store = configureStore({
  reducer: {
    modals: ModalsReducer,
  },
});
