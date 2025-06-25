import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const fetchTasks = ()=> API.get('tasks/');
export const fetchOneTask = (id) => API.get(`tasks/${id}`)

export const addTask = (task)=> API.post('tasks/', task);
export const updateTask = (id, data) => API.patch(`tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`tasks/${id}`);

