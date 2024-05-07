"use client";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

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
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

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

  const handleFilter = (filter: string) => {
    switch (filter) {
      case "all":
        return setFilteredTodos([]);
      case "active":
        return setFilteredTodos(todos.filter((todo) => !todo.completed));
      case "completed":
        return setFilteredTodos(todos.filter((todo) => todo.completed));
      default:
        return todos;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoFilters handleFilter={handleFilter} />
      <TodoList
        todos={filteredTodos.length > 0 ? filteredTodos : todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <TodoInput addTodo={addTodo} />
    </main>
  );
}
