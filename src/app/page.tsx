"use client";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Home() {
  const [todos, setTodos] = useState<string[]>(["a", "b", "c"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <TodoInput />
    </main>
  );
}
