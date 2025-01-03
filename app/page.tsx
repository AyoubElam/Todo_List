/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getAllTodos } from "@/api";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
