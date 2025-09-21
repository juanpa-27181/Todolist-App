import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="title">Todos</h1>
      <div className="todo-box">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                X
              </button>
            </li>
          ))}
        </ul>

        <div className="footer">
          {todos.length} item{todos.length !== 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
}

export default App;
