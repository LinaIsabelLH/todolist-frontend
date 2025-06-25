import { useEffect, useState } from "react";


const TasksForm = ({categories, createTask, isLoading})=>{
  const [newTask, setNewTask]=useState("");
  const [catTask, setCatTask]= useState("");

  const handleSubmitTask =()=>{
    createTask(newTask);
  }


    return (
      <form onSubmit={handleSubmitTask} className="flex flex-row justify-center m-4 pl-4">
        <input
          type="text"
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
          className="border rounded-lg border-gray-600 bg-white  p-2 mx-4 min-w-[335px]"
        />
        <select className="border rounded-lg border-gray-600 bg-white p-2 ">
          <option>Toutes les categories</option>
        </select>
        <button className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg mx-4 min-w-[160px]">
          Ajouter une tâche
        </button>
      </form>

    )
}

export default TasksForm; 