const Categories = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="mr-3 bg-amber-200"
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
