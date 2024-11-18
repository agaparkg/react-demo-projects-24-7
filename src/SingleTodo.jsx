import React, { useState } from "react";

const SingleTodo = ({
  text,
  completed,
  id,
  handleTodoDelete,
  handleTodoComplete,
  handleEditIdChange,
  handleTodoSave,
  editMode,
}) => {
  const [inputVal, setInputVal] = useState(text);

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
      handleEditIdChange(id);
    }
  };

  return (
    <div className="input-group mb-1">
      <span className="input-group-text">
        <input
          checked={completed}
          id={id}
          onChange={(e) => handleTodoComplete(e.target.checked, id)}
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
        onClick={() => handleTodoDelete(id)}
        className="btn btn-danger"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
