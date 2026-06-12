const Categories = ({ categories, filterItems }) => {
  return (
    <div className="mt-8 mb-16 flex justify-center flex-wrap gap-4">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="font-semibold bg-amber-500 text-white rounded-sm shadow  tracking-wide py-1 px-3 cursor-pointer border-transparent capitalize hover:bg-amber-800 hover:scale-104 hover:shadow-lg transition-all duration-300 "
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
