"use client";

import { completeTodo, deleteTodo } from "@/utils/actions";

type TodoProp = {
  data: string;
  id: number;
  index: number;
  completed: boolean;
};

export default function Todo({ data, id, completed }: TodoProp) {
  // const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.stopPropagation();
  //   deleteTodo(index);
  // };

  // const handleComplete = () => {
  //   completeTodo(index);
  // };

  const handleComplete = () => {
    completeTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const isCompleted = completed ? "line-through" : "none";

  return (
    <li className="flex justify-between items-center">
      <span onClick={handleComplete} className={isCompleted}>
        {data}
      </span>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">
        Delete
      </button>
    </li>
  );
}
