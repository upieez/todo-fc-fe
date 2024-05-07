"use client";

export default function TodoInput() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submitting...");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Add a new todo"
        className="border border-gray-300 p-2"
      />
      <button className="bg-blue-500 text-white p-2 mt-2">Add</button>
    </form>
  );
}
