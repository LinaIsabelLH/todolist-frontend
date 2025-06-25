import { useEffect, useState } from "react";


const TaskList= ()=> {
  const [tasks, setTasks] = useState([]);


  return (
  
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center p-2 bg-white shadow rounded">
          <input type="checkbox" className={task.is_completed ? "line-through text-gray-400" : ""}>
            {task.description}
          </input>
          <div>
            <button onClick={() => handleUpdate(task.id, task.is_completed)} className="text-sm text-green-600 mr-2">✓</button>
            <button onClick={() => handleDelete(task.id)} className="text-sm text-red-600">🗑</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
