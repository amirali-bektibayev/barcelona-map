import { configureStore } from "@reduxjs/toolkit";
import clickedReducer from "./clickedSlice";

export default configureStore({
  reducer: {
    clickedPoints: clickedReducer,
  },
});
