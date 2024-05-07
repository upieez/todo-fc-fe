"use client";
import Todo from "../Todo";
import { TodoType } from "../page";

type TodoListProps = {
  todos: TodoType[];
  deleteTodo: (index: number) => void;
  completeTodo: (index: number) => void;
};

export default function TodoList({
  todos,
  deleteTodo,
  completeTodo,
}: TodoListProps) {
  return (
    <section className="flex flex-col items-center">
      <ul className="border border-gray-300 p-4">
        {todos.map(({ id, data, completed }, index) => (
          <Todo
            key={id}
            data={data}
            completed={completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}
