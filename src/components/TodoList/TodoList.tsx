"use client";
import Todo from "../Todo";
import { TodoType } from "../TodoContainer";

type TodoListProps = {
  todos: TodoType[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <section className="flex flex-col items-center">
      <ul className="border border-gray-300 p-4">
        {todos.map(({ id, text, completed }, index) => (
          <Todo
            key={id}
            data={text}
            id={id}
            completed={completed}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}
