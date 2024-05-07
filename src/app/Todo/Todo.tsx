type TodoProp = {
  data: string;
};

export default function Todo({ data }: TodoProp) {
  return (
    <li className="flex justify-between items-center">
      <span>{data}</span>
      <button className="bg-red-500 text-white p-2">Delete</button>
    </li>
  );
}
