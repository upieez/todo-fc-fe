"use client";
import { useState } from "react";
import TodoFilters from "../TodoFilters";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

export type TodoType = {
  data: string;
  id: string;
  completed: boolean;
};

type TodoContainerProps = {
  data: string;
};

export default function TodoContainer({ data }: TodoContainerProps) {
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

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
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
    <>
      {/* TODO: Destructive action, should prompt user if they are sure */}
      <button
        onClick={clearCompleted}
        className="bg-red-500 text-white p-2 mt-2"
      >
        Clear Completed
      </button>
      <TodoFilters handleFilter={handleFilter} />
      <TodoList
        todos={filteredTodos.length > 0 ? filteredTodos : todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <TodoInput addTodo={addTodo} />
      <p>{data}</p>
    </>
  );
}
