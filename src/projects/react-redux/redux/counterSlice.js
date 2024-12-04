import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  number: 100,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  newFunc: () => {},
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    getNumber: (state) => {
      state.number *= 10;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

console.log("counterSlice", counterSlice, increment());

export default counterSlice;
