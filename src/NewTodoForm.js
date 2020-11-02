import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function NewTodoForm({ addTodo }) {
  const [inputValue, setInputValues] = useState({
    task: ""
  });

  const handleChange = (e) => {
    setInputValues({
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    if (!inputValue.task) {
      return;
    } else {
      addTodo(inputValue.task);
      setInputValues({
        task: ""
      });
    }
  };
  const { task } = inputValue;

  return (
    <>
      <div className="NewTodoForm">
        <label htmlFor="todo">New Todo: </label>
        <input value={task} onChange={handleChange} type="text" name="task" />
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}
