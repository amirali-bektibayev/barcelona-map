import { createSlice } from "@reduxjs/toolkit";

const clickedSlice = createSlice({
  name: "points",
  initialState: {
    points: [],
  },
  reducers: {
    addClickedPoint(state, action) {
      console.log(state);
      console.log(action.payload);
      state.points.push(action.payload);
    },
    removeClickedPoint(state, action) {},
  },
});

export const { addClickedPoint, removeClickedPoint } = clickedSlice.actions;

export default clickedSlice.reducer;
