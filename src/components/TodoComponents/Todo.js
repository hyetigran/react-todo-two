import React from "react";

import "./Todo.css";

const Todo = props => {
  return (
    <div
      className={props.item.completed ? "completed" : "notCompleted"}
      onClick={() => props.handleComplete(props.item.id)}
    >
      {props.item.task}
    </div>
  );
};

export default Todo;
