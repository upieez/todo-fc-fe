"use client";
import Todo from "../Todo";

type TodoListProps = { todos: string[] };

export default function TodoList({ todos }: TodoListProps) {
  return (
    <section className="flex flex-col items-center">
      <ul className="border border-gray-300 p-4">
        {todos.map((todo) => (
          <Todo key={todo} data={todo} />
        ))}
      </ul>
    </section>
  );
}
