import TodoFilters from "@/components/TodoFilters";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";
import DelButton from "@/components/DelButton";
import queryBuilder from "@/utils/queryBuilder";

async function getTodos(searchParams: URLSearchParams) {
  const URL = `${process.env.API_BASE}/todo/`;
  const url = queryBuilder(URL, searchParams);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const { data } = await getTodos(searchParams);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <DelButton />
      <TodoFilters />
      <TodoList todos={JSON.parse(data)} />
      <TodoInput />
    </main>
  );
}
