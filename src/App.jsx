import "./App.css";
import TaskList from "./components/TasksList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-zinc-100">
      <h1 className="font-extrabold text-5xl mb-12">MY TO DO LIST</h1>
      <div className="flex flex-row m-4 min-w-[1000px] justify-center">
        <input
          type="text"
          placeholder="Nouvelle catégorie"
          className="border rounded-lg border-gray-600 bg-white p-2 mx-4 min-w-[500px]"
        />
        <button className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg min-w-[199px]">
          Ajouter une catégorie
        </button>
      </div>
      <div className="flex flex-row min-w-[1000px] justify-center ml-4 my-4">
      <select className="border rounded-lg border-gray-600  bg-white p-2 min-w-[715px]">
        <option className="min-w-[700px]">Toutes les categories</option>
      </select>
      </div>
      <div className="flex flex-row justify-center m-4 pl-4">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          className="border rounded-lg border-gray-600 bg-white  p-2 mx-4 min-w-[335px]"
        />
        <select className="border rounded-lg border-gray-600 bg-white p-2 ">
          <option>Toutes les categories</option>
        </select>
        <button className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg mx-4 min-w-[160px]">
          Ajouter une tâche
        </button>
      </div>
    </div>
  );
}

export default App;
