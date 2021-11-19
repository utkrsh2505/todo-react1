import React from "react";
import Heading from "./Heading";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useState } from "react";
function Todo() {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length
    };
    setTodos([...todos, payload]);
  };
  return (
    <>
      <Heading title="Todo" />
      <TodoInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => {
        return (
          <TodoItem title={todo.title} id={todo.id} status={todo.status} />
        );
      })}
    </>
  );
}
export default Todo;
