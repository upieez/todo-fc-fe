import { useState } from "react";
import { filter } from "../../utils/actions";
import TodoFilters from "../TodoFilters";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

export type TodoType = {
  text: string;
  id: number;
  order: number;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

type TodoContainerProps = {
  data: TodoType[];
};

export default function TodoContainer({ data }: TodoContainerProps) {
  return (
    <>
      {/* TODO: Destructive action, should prompt user if they are sure */}
      <button className="bg-red-500 text-white p-2 mt-2">
        Clear Completed
      </button>
      <TodoFilters />
      <TodoList todos={data} />
      {/* <TodoInput /> */}
    </>
  );
}
