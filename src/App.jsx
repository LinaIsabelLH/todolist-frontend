import "./App.css";
import TaskList from "./components/TasksList";
import TasksForm from "./components/TasksForm";
import CategorySelect from "./components/CategorySelect";
import CategoryForm from "./components/CategoryForm";
import useCategories from "./hooks/useCategories";
import useTasks from "./hooks/useTasks";

function App() {
  const { createCategory, removeCategory, categories } = useCategories();
  const { tasks, isLoading, loadTasks, createTask, editTask, removeTask } =
    useTasks();

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-100">
        <h1 className="font-extrabold text-5xl mb-12">MY TO DO LIST</h1>
        <CategoryForm createCategory={createCategory} />
        <CategorySelect
          categories={categories}
          removeCategory={removeCategory}
        />
        <TasksForm
          categories={categories}
          createTask={createTask}
          isLoading={isLoading}
        />
        <TaskList
          tasks={tasks}
          loadTasks={loadTasks}
          editTask={editTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
