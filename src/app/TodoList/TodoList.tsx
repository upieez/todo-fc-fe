"use client";
import Todo from "../Todo";

type TodoListProps = { todos: string[]; deleteTodo: (index: number) => void };

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <section className="flex flex-col items-center">
      <ul className="border border-gray-300 p-4">
        {todos.map((todo, index) => (
          <Todo key={todo} data={todo} deleteTodo={deleteTodo} index={index} />
        ))}
      </ul>
    </section>
  );
}
