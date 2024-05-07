"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const URL = `${process.env.API_BASE}/todo/`;

export async function addTodo(formData: FormData) {
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ text: formData.get("todo") }),
  });

  if (!res.ok) {
    throw new Error("Failed to add todo");
  }

  revalidatePath("/");
  await res.json();
  return { message: "wow" };
}

export async function filter(query: string) {
  revalidatePath("/");
  if (query === "all") {
    redirect("/");
  }

  redirect(`/?filter=${query}`);
}

export async function completeTodo(id: number) {
  const res = await fetch(`${URL}${id}/`, {
    method: "PATCH",
    body: JSON.stringify({ completed: true }),
  });

  if (!res.ok) {
    throw new Error("Failed to complete todo");
  }

  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${URL}${id}/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/");
}

export async function clearAllCompletedTodo() {
  const res = await fetch(`${URL}completed/`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/");
}
