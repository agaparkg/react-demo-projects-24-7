import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    // comfyState: comfyState.reducer,
  },
});

export default store;
