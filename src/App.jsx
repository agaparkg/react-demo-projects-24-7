import { Component } from "react";
import "./App.css";
import SingleTodo from "./components/SingleTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
      todos: {
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
      },
    };
  }

  handleTodoDelete = (todoId) => {
    const { todos } = this.state;

    const newTodos = JSON.parse(JSON.stringify(todos));

    delete newTodos[todoId];

    this.setState({ todos: newTodos });
  };

  handleTodoComplete = (completeStatus, todoId) => {
    const { todos } = this.state;

    const newTodos = JSON.parse(JSON.stringify(todos));

    newTodos[todoId].completed = completeStatus;

    this.setState({ todos: newTodos });
  };

  handleEditIdChange = (todoId) => {
    this.setState({ editId: todoId });
  };

  render() {
    const { todos, editId } = this.state;

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
          {Object.entries(todos).map(([key, value]) => {
            const editMode = editId == key;

            return (
              <SingleTodo
                key={key}
                {...value}
                id={key}
                editMode={editMode}
                handleTodoComplete={this.handleTodoComplete}
                handleTodoDelete={this.handleTodoDelete}
                handleEditIdChange={this.handleEditIdChange}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
