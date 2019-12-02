import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoValue: "",
      todoList: ["something"]
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    let newTodoList = [...this.state.todoList, this.state.todoValue];
    this.setState({ todoList: newTodoList, todoValue: "" });
  };

  // handleCheck(newStatus, isChecked) {
  //   let newArray = isChecked // if isChecked is true
  //     ? [...this.state.filterStatus, newStatus] // add element
  //     : [...this.state.filterStatus].filter(e => e !== newStatus); // remove the elements that are equal to newStatus
  //   this.setState({ filterStatus: newArray });
  // }

  handleChange = event => {
    this.setState({ todoValue: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <TodoForm
          todoValue={this.state.todoValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
