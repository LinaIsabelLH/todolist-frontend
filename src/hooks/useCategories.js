import { useState, useEffect } from "react";
import {
  fetchCategories,
  addCategory,
  deleteCategory,
} from "../api/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadCategories = async () => {
    setIsLoading(true);
    const res = await fetchCategories();
    setCategories(res.data);
    setIsLoading(false);
  };

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
    categories,
    isLoading,
    createCategory,
    removeCategory,
  };
}
