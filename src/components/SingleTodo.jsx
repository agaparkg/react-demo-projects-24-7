import React, { Component } from "react";

class SingleTodo extends Component {
  handleInputChange = () => {};

  render() {
    return (
      <div className="input-group mb-1">
        <span className="input-group-text">
          <input type="checkbox" />
        </span>
        <input
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          value={"Shopping"}
        />
        <button className="btn btn-secondary" type="button">
          Edit
        </button>
        <button className="btn btn-danger" type="button">
          Delete
        </button>
      </div>
    );
  }
}

export default SingleTodo;
