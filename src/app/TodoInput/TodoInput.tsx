"use client";
import { useState } from "react";

type TodoInputProps = { addTodo: (input: string) => void };

export default function TodoInput({ addTodo }: TodoInputProps) {
  const [input, setInput] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(input);
    setInput("");
    // TODO: sending over data to server
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        required
        type="text"
        placeholder="Add a new todo"
        className="border border-gray-300 p-2"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2">Add</button>
    </form>
  );
}
