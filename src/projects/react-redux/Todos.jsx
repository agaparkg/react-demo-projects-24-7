import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import SingleTodo from "./SingleTodo";
import { handleAddTodo } from "./redux/todosSlice";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const Todos = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const editId = useSelector((state) => state.todos.editId);

  useEffect(() => {
    updateLocalStorage(todos);
  }, [todos]);

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
          onClick={() => dispatch(handleAddTodo())}
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
            <SingleTodo key={key} {...value} id={key} editMode={editMode} />
          );
        })}
      </main>
    </div>
  );
};

export default Todos;
