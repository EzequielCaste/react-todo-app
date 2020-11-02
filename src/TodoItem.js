import React, { useState } from "react";

export default function TodoItem({
  text,
  completed,
  updateTodo,
  removeTodo,
  toggleTodo,
  id
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [task, setTask] = useState({ task: text });

  const handleInputChange = (e) => {
    setTask({
      task: e.target.value
    });
  };

  const handleRemove = (e) => {
    removeTodo(id);
  };
  const toggleForm = () => {
    setIsEditing((prev) => !prev);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, task.task);
    setIsEditing(false);
  };

  const handleToggle = (e) => {
    const id = e.target.parentNode.getAttribute("id");
    toggleTodo(id);
  };

  let result;

  if (isEditing) {
    result = (
      <div className="TodoItem">
        <form onSubmit={handleUpdate}>
          <input
            name="task"
            value={task.task}
            type="text"
            onChange={handleInputChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="TodoItem" id={id}>
        <span
          className={completed ? "complete" : "incomplete"}
          onClick={handleToggle}
        >
          {text}
        </span>
        <button className="button sm delete" onClick={handleRemove}>
          <i className="far fa-trash-alt" />
        </button>
        <button className="button sm edit" onClick={toggleForm}>
          <i className="far fa-edit" />
        </button>
      </div>
    );
  }

  return result;
}
