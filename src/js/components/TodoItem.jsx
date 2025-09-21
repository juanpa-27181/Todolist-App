import React from "react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="flex items-center gap-3 py-3 px-2 hover:bg-slate-50">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded-full border-gray-300 text-sky-600 focus:ring-sky-500"
      />
      <span
        className={`flex-1 text-lg ${
          todo.done ? "line-through text-slate-400" : "text-slate-700"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo.id)}
        className="text-rose-500 hover:text-rose-700"
      >
    
      </button>
    </li>
  );
}
