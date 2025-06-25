import "./App.css";
import TaskList from "./components/TasksList";
import TasksForm from "./components/TasksForm";
import CategorySelect from "./components/CategorySelect";
import CategoryForm from "./components/CategoryForm";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-100">
        <h1 className="font-extrabold text-5xl mb-12">MY TO DO LIST</h1>
        <CategoryForm />
        <CategorySelect />
        <TasksForm />
      </div>
    </div>
  );
}

export default App;
