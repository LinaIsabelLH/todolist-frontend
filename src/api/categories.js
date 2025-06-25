import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const fetchCategories = ()=> API.get('categories/');
export const fetchOneCategory = (id)=> API.get(`categories/${id}`)

export const addCategory = (category) => API.post('categories/', category)
//export const updateCategory = (id, data) => API.patch(`categories/${id}`, data);
export const deleteCategory = (id) => API.delete(`categories/${id}`);