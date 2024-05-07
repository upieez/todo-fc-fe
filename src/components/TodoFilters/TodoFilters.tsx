"use client";
import { filter } from "@/utils/actions";
import { ReactNode } from "react";

export default function TodoFilters() {
  return (
    <div className="flex flex-row gap-3">
      <FilterButton
        onClick={() => {
          filter("all");
        }}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => {
          filter("active");
        }}
      >
        Active
      </FilterButton>
      <FilterButton
        onClick={() => {
          filter("completed");
        }}
      >
        Completed
      </FilterButton>
    </div>
  );
}

function FilterButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 mt-2">
      {children}
    </button>
  );
}
