"use client";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export type TodoType = {
  data: string;
  id: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([
    { data: "todo 1", id: "1", completed: false },
    { data: "todo 2", id: "2", completed: true },
    { data: "todo 3", id: "3", completed: false },
  ]);

  const addTodo = (todo: string) => {
    const newTodo = {
      data: todo,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <TodoInput addTodo={addTodo} />
    </main>
  );
}
