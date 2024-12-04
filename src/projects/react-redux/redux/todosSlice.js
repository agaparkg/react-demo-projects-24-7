import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editId: null,
  todos: JSON.parse(localStorage.getItem("todos")) || {
    1: {
      text: "Todo 1",
      completed: false,
    },
    2: {
      text: "Todo 2",
      completed: false,
    },
    3: {
      text: "Todo 3",
      completed: false,
    },
    4: {
      text: "Todo 4",
      completed: false,
    },
  },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleTodoDelete: (state, action) => {
      console.log("action inside todosSlice", action, state);
      delete state.todos[action.payload];
    },
    handleTodoSave: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    handleTodoComplete: (state, action) => {
      // {type: "todos/handleTodoComplete", payload: {checked: true, id: 100}}
      state.number *= 10;
    },
    handleEditIdChange: (state, action) => {
      state.number *= 10;
    },
    handleAddTodo: (state) => {
      state.number *= 10;
    },
  },
});

console.log(todosSlice);

export const {
  handleTodoDelete,
  handleAddTodo,
  handleEditIdChange,
  handleTodoComplete,
  handleTodoSave,
} = todosSlice.actions;

export default todosSlice;

// const handleAddTodo = (id) => {
//   return {
//     type: "todos/handleTodoDelete",
//     payload: id,
//   };
// };
