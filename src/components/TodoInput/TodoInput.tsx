import { addTodo } from "../../utils/actions";

export default function TodoInput() {
  return (
    <form action={addTodo} className="flex flex-col items-center">
      <label htmlFor="todo">Enter Todo</label>
      <input
        required
        type="text"
        name="todo"
        id="todo"
        placeholder="Add a new todo"
        className="border border-gray-300 p-2 dark:text-black"
      />
      <button className="bg-blue-500 text-white ck p-2 mt-2">Add</button>
    </form>
  );
}
