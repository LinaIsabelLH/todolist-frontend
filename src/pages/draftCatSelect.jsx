const CategorySelect = ({
  categories,
  selectedCategory,
  onCategoryChange,
  removeCategory,
}) => {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const handleRemove = (id) => {
    removeCategory(id);
  };

  return (
    <div className="flex flex-row min-w-[1000px] justify-center ml-4 my-4">
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="border rounded-lg border-gray-600  bg-white p-2 min-w-[715px]"
      >
        <option value="" className="min-w-[700px]">
          Filtrer par catégorie
        </option>
        <option value="all">Toutes les catégories</option>
        {categories &&
          categories.map((cat) => {
            return (
              <div key={cat.id} className="min-w-[700px]">
                <option  value={cat.id} className="">
                  {cat.name}
                  <button
                    value={cat.id}
                    onClick={() => {
                      handleRemove(cat.id);
                    }}
                    className="font-semibold min-w-[10px]"
                  >
                    X
                  </button>
                </option>
              </div>
            );
          })}
      </select>
    </div>
  );
};

export default CategorySelect;

