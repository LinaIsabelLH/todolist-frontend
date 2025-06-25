const CategorySelect = () => {
  return (
    <div className="flex flex-row min-w-[1000px] justify-center ml-4 my-4">
      <select className="border rounded-lg border-gray-600  bg-white p-2 min-w-[715px]">
        <option className="min-w-[700px]">Toutes les categories</option>
      </select>
    </div>
  );
};

export default CategorySelect;
