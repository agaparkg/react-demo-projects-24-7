import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleEditIdChange,
  handleTodoComplete,
  handleTodoDelete,
} from "./redux/todosSlice";

const SingleTodo = ({ text, completed, id, editMode }) => {
  const [inputVal, setInputVal] = useState(text);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSaveClick = () => {
    if (editMode) {
      if (inputVal.trim() !== "") {
        handleTodoSave(inputVal, id);
      } else {
        alert("Type a text in the input box.");
      }
    } else {
      dispatch(handleEditIdChange(id));
    }
  };

  return (
    <div className="input-group mb-1">
      <span className="input-group-text">
        <input
          checked={completed}
          id={id}
          onChange={
            (e) =>
              dispatch(handleTodoComplete({ checked: e.target.checked, id }))
            // dispatch({type: "todos/handleTodoComplete", payload: {checked: true, id: 100}})
          }
          type="checkbox"
        />
      </span>
      <input
        disabled={!editMode}
        onChange={handleInputChange}
        type="text"
        className={`form-control ${completed ? "line-thru" : ""}`}
        value={inputVal}
      />
      <button
        onClick={handleSaveClick}
        className={`btn btn-${editMode ? "success" : "secondary"}`}
        type="button"
      >
        {editMode ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => dispatch(handleTodoDelete(id))}
        className="btn btn-danger"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
