"use client";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Home() {
  const [todos, setTodos] = useState<string[]>(["a", "b", "c"]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoInput addTodo={addTodo} />
    </main>
  );
}
