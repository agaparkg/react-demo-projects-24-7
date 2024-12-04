import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
    // comfyState: comfyState.reducer,
  },
});

export default store;

// const reducer = (state, action) => {
//     return {...state, count: 1}
// }
