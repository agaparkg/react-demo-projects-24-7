import React, { Component } from "react";

class SingleTodo extends Component {
  //   handleDelete = (e) => {
  //     console.log(e.target.id);
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     // handleTodoDelete();
  //     this.props.delFn(e.target.id);
  //   };

  //   handleComplete = (e) => {
  //     // console.log(e.target.id);
  //     this.props.handleTodoComplete(e.target.checked, e.target.id);
  //   };

  render() {
    const {
      text,
      completed,
      id,
      handleTodoDelete,
      handleTodoComplete,
      handleEditIdChange,
      editMode,
    } = this.props;

    const customClass = completed ? "form-control line-thru" : "form-control";

    return (
      <div className="input-group mb-1">
        <span className="input-group-text">
          {/* <input id={id} onChange={this.handleComplete} type="checkbox" /> */}
          <input
            checked={completed}
            id={id}
            onChange={(e) => handleTodoComplete(e.target.checked, id)}
            type="checkbox"
          />
        </span>
        <input
          disabled={!editMode}
          onChange={this.handleInputChange}
          type="text"
          className={customClass}
          value={text}
        />
        {/* {editMode ? (
          <button
            onClick={() => handleEditIdChange(id)}
            className="btn btn-success"
            type="button"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEditIdChange(id)}
            className="btn btn-secondary"
            type="button"
          >
            Edit
          </button>
        )} */}

        <button
          onClick={() => handleEditIdChange(id)}
          className="btn btn-success"
          type="button"
        >
          Save
        </button>
        <button
          //   id={id}
          //   onClick={this.handleDelete}
          onClick={() => handleTodoDelete(id)}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default SingleTodo;
