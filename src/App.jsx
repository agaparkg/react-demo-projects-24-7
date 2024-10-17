import { Component } from "react";
import "./App.css";
import SingleTodo from "./components/SingleTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Todo List App - DOM</h1>
        <div className="input-group mb-3">
          <input
            id="new-todo-input"
            type="text"
            className="form-control"
            placeholder="Add Text..."
          />
          <button id="add-todo" className="btn btn-primary" type="button">
            Add Todo
          </button>
        </div>
        <main>
          <SingleTodo />
          <SingleTodo />
          <SingleTodo />
          <SingleTodo />
          <SingleTodo />
          <SingleTodo />
        </main>
      </div>
    );
  }
}

export default App;
