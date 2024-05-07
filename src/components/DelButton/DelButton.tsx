"use client";

import { clearAllCompletedTodo } from "@/utils/actions";

export default function DelButton() {
  return (
    <button
      onClick={() => {
        clearAllCompletedTodo();
      }}
      className="bg-red-500 text-white p-2 mt-2"
    >
      Clear Completed
    </button>
  );
}
