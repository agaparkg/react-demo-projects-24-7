import { useRef, useState } from "react";
import "./App.css";
import SingleTodo from "./components/SingleTodo";
import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialTodos = JSON.parse(localStorage.getItem("todos")) || {
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
};

const App = () => {
  const [editId, setEditId] = useState(null);
  const [todos, setTodos] = useImmer(initialTodos);
  const inputRef = useRef(null);

  const handleTodoDelete = (todoId) => {
    setTodos((draft) => {
      delete draft[todoId];
      updateLocalStorage(draft);
    });
  };

  const handleTodoSave = (newText, todoId) => {
    setEditId(null);
    setTodos((draft) => {
      draft[todoId].text = newText;
      updateLocalStorage(draft);
    });
  };

  const handleTodoComplete = (completeStatus, todoId) => {
    setTodos((draft) => {
      draft[todoId].completed = completeStatus;
      updateLocalStorage(draft);
    });
  };

  const handleEditIdChange = (todoId) => {
    setEditId(todoId);
  };

  const handleAddTodo = () => {
    const value = inputRef.current.value;

    if (value.trim() !== "") {
      const newTodos = JSON.parse(JSON.stringify(todos));

      const newId = uuidv4();

      newTodos[newId] = {
        text: value,
        completed: false,
      };

      updateLocalStorage(newTodos);
      setTodos(newTodos);
    } else {
      alert("Type a text in the input box.");
    }
    inputRef.current.value = "";
  };

  return (
    <div className="wrapper">
      <h1>Todo List App - DOM</h1>
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Add Text..."
        />
        <button
          onClick={handleAddTodo}
          className="btn btn-primary"
          type="button"
        >
          Add Todo
        </button>
      </div>
      <main>
        {Object.entries(todos).map(([key, value]) => {
          const editMode = editId == key;

          return (
            <SingleTodo
              key={key}
              {...value}
              id={key}
              editMode={editMode}
              handleTodoComplete={handleTodoComplete}
              handleTodoDelete={handleTodoDelete}
              handleEditIdChange={handleEditIdChange}
              handleTodoSave={handleTodoSave}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
