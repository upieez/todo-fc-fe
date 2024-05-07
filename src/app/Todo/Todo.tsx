type TodoProp = {
  data: string;
  index: number;
  deleteTodo: (index: number) => void;
};

export default function Todo({ data, deleteTodo, index }: TodoProp) {
  const handleDelete = () => {
    deleteTodo(index);
  };

  return (
    <li className="flex justify-between items-center">
      <span>{data}</span>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">
        Delete
      </button>
    </li>
  );
}
