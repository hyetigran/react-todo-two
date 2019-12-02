import React from "react";
import uuid from "uuid";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoValue: "",
      todoList: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let newTodoItem = {
      task: this.state.todoValue,
      id: uuid(),
      completed: false
    };
    let newTodoList = [...this.state.todoList, newTodoItem];
    this.setState({ todoList: newTodoList, todoValue: "" });
    console.log(this.state.todoList);
  };

  handleChange = event => {
    this.setState({ todoValue: event.target.value });
  };

  handleComplete = id => {
    console.log("I was clicked", id);
    this.setState(prevState => ({
      todoList: prevState.todoList.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    }));
    console.log(this.state.todoList);
  };

  render() {
    return (
      <div className="container">
        <TodoForm
          todoValue={this.state.todoValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todoList={this.state.todoList}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
