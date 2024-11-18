import { act, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_new_todo": {
      const newId = uuidv4();

      return produce(state, (draft) => {
        draft.todos[newId] = {
          text: action.payload,
          completed: false,
        };

        updateLocalStorage(draft.todos);
      });
    }
    case "edit_todo": {
      return produce(state, (draft) => {
        draft.editId = action.payload;
      });
    }
    case "delete_todo": {
      return produce(state, (draft) => {
        delete draft.todos[action.payload];

        updateLocalStorage(draft.todos);
      });
    }
    case "complete_todo": {
      return produce(state, (draft) => {
        draft.todos[action.payload.id].completed = action.payload.checked;

        updateLocalStorage(draft.todos);
      });
    }

    case "save_todo": {
      return produce(state, (draft) => {
        draft.editId = null;
        draft.todos[action.payload.id].text = action.payload.text;

        updateLocalStorage(draft.todos);
      });
    }
    case "clear_all":
      return produce(state, (draft) => {
        draft.todos = {};
        updateLocalStorage({});
      });
    case "clear_completed_todos": {
      return produce(state, (draft) => {
        const newArr = Object.entries(draft.todos); // [[id, value], [], []]

        for (let [id, value] of newArr) {
          if (value.completed) {
            delete draft.todos[id];
          }
        }

        updateLocalStorage(draft.todos);
      });
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
