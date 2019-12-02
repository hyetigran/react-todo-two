import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
