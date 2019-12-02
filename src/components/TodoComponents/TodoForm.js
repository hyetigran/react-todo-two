import React from "react";

import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <form onSubmit={event => props.handleSubmit(event)}>
        <label>
          Todo Form
          <input
            type="text"
            name="todo"
            value={props.todoValue}
            onChange={event => props.handleChange(event)}
          />
        </label>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
