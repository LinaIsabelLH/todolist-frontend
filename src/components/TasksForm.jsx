import { useState } from "react";

const TasksForm = ({ categories, createTask }) => {
  const [newTask, setNewTask] = useState({ description: "", category_id: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!newTask.description.trim() || !newTask.category_id) {
      alert("Veuillez rentrer une tâche et choisir une catégorie");
      return;
    }

    createTask(newTask);
    setNewTask({ description: "", category_id: "" });
  };

  return (
    <form
      onSubmit={handleSubmitTask}
      className="flex flex-row justify-center m-4 pl-4"
    >
      <input
        type="text"
        name="description"
        value={newTask.description}
        onChange={handleChange}
        placeholder="Nouvelle tâche"
        className="border rounded-lg border-gray-600 bg-white  p-2 mx-4 min-w-[335px]"
        required
      />
      <select
        name="category_id"
        value={newTask.category_id}
        onChange={handleChange}
        className="border rounded-lg border-gray-600 bg-white p-2 "
        required
      >
        <option value="" disabled>
          Choisir une catégorie
        </option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.i} value={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
      <button
        type="submit"
        className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg mx-4 min-w-[160px]"
      >
        Ajouter une tâche
      </button>
    </form>
  );
};

export default TasksForm;
