import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const fetchTasks = ()=> API.get('tasks/');
export const fetchOneTask = (id) => API.get(`tasks/${id}`)

export const addTask = (task)=> API.post('tasks/', task);
export const updateTask = (id, data) => API.patch(`tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`tasks/${id}`);

export const fetchCategories = ()=> API.get('categories/');
export const fetchOneCategory = (id)=> API.get(`categories/${id}`)

export const addCategory = (category) => API.post('categories/', category)
export const updateCategory = (id, data) => API.patch(`categories/${id}`, data);
export const deleteCategory = (id) => API.delete(`categories/${id}`);