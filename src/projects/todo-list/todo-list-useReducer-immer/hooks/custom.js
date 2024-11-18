import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_new_todo": {
      const newState = JSON.parse(JSON.stringify(state));
      const newId = uuidv4();

      newState.todos[newId] = {
        text: action.payload,
        completed: false,
      };

      updateLocalStorage(newState.todos);

      return newState;

      //   OPTION 2
      //   const newId = uuidv4();
      //   return {
      //     ...state,
      //     todos: {
      //       ...state.todos,
      //       [newId]: {
      //         text: action.payload,
      //         completed: false,
      //       },
      //     },
      //   };
    }
    case "edit_todo": {
      return {
        ...state,
        editId: action.payload,
      };
    }
    case "delete_todo": {
      const newState = JSON.parse(JSON.stringify(state));
      delete newState.todos[action.payload];

      updateLocalStorage(newState.todos);
      return newState;
    }
    case "complete_todo": {
      const newState = JSON.parse(JSON.stringify(state));

      newState.todos[action.payload.id].completed = action.payload.checked;

      updateLocalStorage(newState.todos);
      return newState;
    }

    case "save_todo": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.editId = null;
      newState.todos[action.payload.id].text = action.payload.text;

      updateLocalStorage(newState.todos);
      return newState;
    }
    case "clear_all":
      updateLocalStorage({});
      return {
        ...state,
        todos: {},
      };
    case "clear_completed_todos": {
      const newState = JSON.parse(JSON.stringify(state));
      const newArr = Object.entries(newState.todos); // [[id, value], [], []]

      for (let [id, value] of newArr) {
        if (value.completed) {
          delete newState.todos[id];
        }
      }

      //   Object.entries(newState.todos).forEach(([id, value]) => {
      //     if (value.completed) {
      //       delete newState.todos[id];
      //     }
      //   });

      updateLocalStorage(newState.todos);

      return newState;
    }
  }
};

// todos = {
//   1: {
//     text: "Todo 1",
//     completed: false
//   },
//   2: {
//     text: "Todo 1",
//     completed: false
//   },
// }

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || {},
  editId: null,
  count: 0,
  products: [],
};

export const useMyCustomHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
