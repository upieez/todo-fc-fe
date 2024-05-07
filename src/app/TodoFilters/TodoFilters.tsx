import { ReactNode } from "react";

type TodoFilterProps = {
  handleFilter: (type: "all" | "active" | "completed") => void;
};

export default function TodoFilters({ handleFilter }: TodoFilterProps) {
  return (
    <div className="flex flex-row gap-3">
      <FilterButton
        onClick={() => {
          handleFilter("all");
        }}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => {
          handleFilter("active");
        }}
      >
        Active
      </FilterButton>
      <FilterButton
        onClick={() => {
          handleFilter("completed");
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
