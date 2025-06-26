const TaskList = ({ tasks, editTask, removeTask }) => {
  
  const handleTaskStatus = (task) => {
    editTask(task.id, { is_completed: !task.is_completed });
  };

  const handleDelete = (id) => {
    removeTask(id);
  };

  // Si aucune tâche n'est à afficher, on peut montrer un message
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 mt-4">Aucune tâche à afficher.</p>;
  }

  return (
    <ul className="space-y-3 w-full max-w-xl mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-3 bg-white shadow-md rounded-lg"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.is_completed}
              onChange={() => handleTaskStatus(task)}
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-3"
            />
            <span
              className={task.is_completed ? "line-through text-gray-400" : ""}
            >
              {task.description}
            </span>
          </div>
          <div>
            <button onClick={() => handleDelete(task.id)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
