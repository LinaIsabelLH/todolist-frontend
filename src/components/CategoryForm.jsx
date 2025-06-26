import { useState } from "react";


const CategoryForm = ({createCategory}) => {
    const [name, setName] =useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(name.trim() === "") return alert("Le champ ne peut pas être vide");
        await createCategory({name});
        setName("");
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row m-4 min-w-[1000px] justify-center">
      <input
        type="text"
        value ={name}
        onChange={(e) =>setName(e.target.value)}
        placeholder="Nouvelle catégorie"
        className="border rounded-lg border-gray-600 bg-white p-2 mx-4 min-w-[500px]"
      />
      <button type="submit" className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg min-w-[202px]">
        Ajouter une catégorie
      </button>
    </form>
  );
};

export default CategoryForm;
