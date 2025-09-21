import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea..."
        className="flex-1 p-3 rounded-lg border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-sky-400 transition"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-sky-600 text-white rounded-lg font-medium shadow hover:bg-sky-700 transition"
      >
        Añadir
      </button>
    </form>
  );
}
