import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return null;
  }

  return (
    <ul className="divide-y">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
