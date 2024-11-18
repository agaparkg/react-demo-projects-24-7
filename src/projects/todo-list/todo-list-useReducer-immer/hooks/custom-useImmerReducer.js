import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";
import { useImmerReducer } from "use-immer";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const reducer = (draft, action) => {
  switch (action.type) {
    case "add_new_todo": {
      const newId = uuidv4();
      draft.todos[newId] = {
        text: action.payload,
        completed: false,
      };
      updateLocalStorage(draft.todos);
      return;
    }
    case "edit_todo": {
      draft.editId = action.payload;
      return;
    }
    case "delete_todo": {
      delete draft.todos[action.payload];
      updateLocalStorage(draft.todos);
      return;
    }
    case "complete_todo": {
      draft.todos[action.payload.id].completed = action.payload.checked;

      updateLocalStorage(draft.todos);
      return;
    }
    case "save_todo": {
      draft.editId = null;
      draft.todos[action.payload.id].text = action.payload.text;

      updateLocalStorage(draft.todos);
      return;
    }
    case "clear_all": {
      draft.todos = {};
      updateLocalStorage({});
    }
    case "clear_completed_todos": {
      const newArr = Object.entries(draft.todos); // [[id, value], [], []]

      for (let [id, value] of newArr) {
        if (value.completed) {
          delete draft.todos[id];
        }
      }

      updateLocalStorage(draft.todos);
      return;
    }
  }
};

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || {},
  editId: null,
  count: 0,
  products: [],
};

export const useMyCustomHook = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return [state, dispatch];
};
