const CategoryForm = () => {
  return (
    <div className="flex flex-row m-4 min-w-[1000px] justify-center">
      <input
        type="text"
        placeholder="Nouvelle catégorie"
        className="border rounded-lg border-gray-600 bg-white p-2 mx-4 min-w-[500px]"
      />
      <button className="bg-indigo-500 text-zinc-100 font-bold p-2 rounded-lg min-w-[199px]">
        Ajouter une catégorie
      </button>
    </div>
  );
};

export default CategoryForm;
