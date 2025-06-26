import { useState, useEffect } from "react";
import {
  fetchOneCategory,
  fetchCategories,
  addCategory,
  deleteCategory,
} from "../api/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const res = await fetchCategories();
    setCategories(res.data);
  };

  const loadOneCategory = async(id)=>{
    const res = await fetchOneCategory(id);
    return res.data
  }

  const createCategory = async (category) => {
    const res = await addCategory(category);
    setCategories((prev) => [...prev, res.data]);
  };

  const removeCategory = async (id) => {
    await deleteCategory(id);
    setCategories((prev) => prev.filter((cat) => cat.id != id));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return {
    loadCategories,
    loadOneCategory,
    categories,
    createCategory,
    removeCategory,
  };
}
