import { useState, useEffect } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../api/tasks";

export default function useTasks() {
    const [tasks, setTasks]=useState([]);

    const loadTasks =async() =>{
        const res = await fetchTasks();
        setTasks(res.data)
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

  return {tasks, loadTasks, createTask, editTask, removeTask};
}
