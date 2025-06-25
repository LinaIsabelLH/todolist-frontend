import { useState, useEffect } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../api/tasks";

export default function useTasks() {
    const [tasks, setTasks]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadTasks =async() =>{
        setIsLoading(true);
        const res = await fetchTasks();
        setTasks(res.data);
        setIsLoading(false);
    };

    const createTask = async(task) =>{
        const res = await addTask(task);
        setTasks((prev) =>[...prev, res.data])
    }

    const editTask = async(id, data) => {
        const res = await updateTask(id, data);
        setTasks((prev) => prev.map((t)=> t.id === res.id ? res.data : data))

    }

    const removeTask = async(id) =>{
        await deleteTask(id);
        setTasks((prev) => prev.filter((t) => t.id != id))
    }

  useEffect(() => {
        loadTasks();
  }, []);

  return {tasks, isLoading, loadTasks, createTask, editTask, removeTask};
}
