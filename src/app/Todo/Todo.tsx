type TodoProp = {
  data: string;
  index: number;
  completed: boolean;
  deleteTodo: (index: number) => void;
  completeTodo: (index: number) => void;
};

export default function Todo({
  data,
  deleteTodo,
  index,
  completed,
  completeTodo,
}: TodoProp) {
  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleComplete = () => {
    completeTodo(index);
  };

  const isCompleted = completed ? "line-through" : "none";

  return (
    <li className="flex justify-between items-center" onClick={handleComplete}>
      <span className={isCompleted}>{data}</span>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">
        Delete
      </button>
    </li>
  );
}
