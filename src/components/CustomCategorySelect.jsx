import { useState, useEffect, useRef } from 'react';

const CustomCategorySelect = ({ categories, selectedCategory, onCategoryChange, removeCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref pour détecter les clics en dehors du composant
  const wrapperRef = useRef(null);

  // Gère la sélection d'une catégorie
  const handleSelect = (categoryId) => {
    onCategoryChange(categoryId);
    setIsOpen(false); // Ferme le menu après sélection
  };

  const handleRemove = (e, categoryId) => {
    // Empêche le clic de se propager et de sélectionner la catégorie en même temps
    e.stopPropagation(); 
    removeCategory(categoryId);
  };

  // Filtre par catégorie
  const getCategorySelected = () => {
    if (selectedCategory === 'all') {
      return 'Toutes les catégories';
    }
    const selected = categories.find(cat => cat.id.toString() === selectedCategory);
    return selected ? selected.name : 'Filtrer par catégorie';
  };

  // Hook pour fermer le menu si l'utilisateur clique en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-400 rounded-lg p-2 text-left flex justify-between items-center"
      >
        <span>{getCategorySelected()}</span>
        <span className="pointer-events-none">▼</span>
      </button>
      {/* Le menu déroulant qui s'affiche si isOpen = true */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
          <li
            onClick={() => handleSelect('all')}
            className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
          >
            Toutes les catégories
          </li>
          {categories && categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => handleSelect(cat.id.toString())}
              className="px-4 py-2 hover:bg-indigo-100 cursor-pointer flex justify-between items-center"
            >
              <span>{cat.name}</span>
              <button
                type="button"
                onClick={(e) => handleRemove(e, cat.id)}
                className="font-extrabold text-xl hover:text-red-400 w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-100"
                aria-label={`Supprimer la catégorie ${cat.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomCategorySelect;
