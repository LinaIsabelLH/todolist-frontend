import "./App.css";
import TaskList from "./components/TasksList";
import TasksForm from "./components/TasksForm";
import CustomCategorySelect from "./components/CustomCategorySelect";
import CategoryForm from "./components/CategoryForm";
import useCategories from "./hooks/useCategories";
import useTasks from "./hooks/useTasks";
import { useState } from "react";

function App() {
  const { createCategory, removeCategory, categories } = useCategories();
  const { tasks, isLoading, loadTasks, createTask, editTask, removeTask } =
    useTasks();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTasks = () => {
    tasks.filter((task) => {
      if (task === "all") {
        return true;
      }
      return task.category.toString() === selectedCategory;
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-100">
        <h1 className="font-extrabold text-5xl mb-12">MY TO DO LIST</h1>
        <CategoryForm createCategory={createCategory} />
        <CustomCategorySelect
          categories={categories}
          selectedCategory={selectedCategory}
          removeCategory={removeCategory}
          onCategoryChange={setSelectedCategory}
        />
        <TasksForm categories={categories} createTask={createTask} />
        {isLoading ? (
          <p>Chargement des tâches ...</p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            loadTasks={loadTasks}
            editTask={editTask}
            removeTask={removeTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
