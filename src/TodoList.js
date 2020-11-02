import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTodoForm from "./NewTodoForm";
import "./styles.css";
import TodoItem from "./TodoItem";

uuidv4();

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "wash car",
      completed: false,
      id: uuidv4()
    },
    {
      text: "read book",
      completed: false,
      id: uuidv4()
    }
  ]);

  const createTodo = (newTodo) => {
    setTodos((prev) => [
      ...prev,
      {
        text: newTodo,
        completed: false,
        id: uuidv4()
      }
    ]);
  };

  const remove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: updatedTask
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const toggle = (id) => {
    const newArray = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            completed: !todo.completed
          }
        : {
            ...todo
          };
    });

    setTodos(newArray);
  };

  const todoListComponent = todos.map((todo) => (
    <TodoItem
      updateTodo={update}
      key={todo.id}
      id={todo.id}
      removeTodo={remove}
      text={todo.text}
      toggleTodo={toggle}
      completed={todo.completed}
    />
  ));

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <NewTodoForm addTodo={createTodo} />
      <div className="TodoList-container">{todoListComponent}</div>
    </div>
  );
}
