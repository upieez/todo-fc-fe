import TodoContainer from "./TodoContainer";

async function getTodos() {
  const res = await fetch("http://localhost:8000/todo");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function Home() {
  const data = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoContainer data={data} />
    </main>
  );
}
