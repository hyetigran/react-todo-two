// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

import "./Todo.css";

const TodoList = props => {
  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <div>
        {props.todoList
          ? props.todoList.map((item, index) => {
              return <Todo item={item} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};

export default TodoList;
