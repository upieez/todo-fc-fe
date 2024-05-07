import TodoFilters from "@/components/TodoFilters";
import TodoList from "@/components/TodoList";
import TodoContainer from "../components/TodoContainer";
import TodoInput from "@/components/TodoInput";
import DelButton from "@/components/DelButton";

function queryBuilder(url, searchParams) {
  const params = new URLSearchParams(searchParams).toString();
  if (Object.keys(params).length > 0) {
    url += "?" + params;
  }
  return url;
}

async function getTodos(searchParams: URLSearchParams) {
  const URL = "http://localhost:8000/todo/";
  const url = queryBuilder(URL, searchParams);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home(request) {
  const { data } = await getTodos(request.searchParams);

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
