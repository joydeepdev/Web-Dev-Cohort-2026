const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p className={`capitalize text-lg ${item.completed && `line-through`}`}>
        {item.name}
      </p>
      <button
        className="bg-red-600 rounded px-2 py-0.5 text-sm text-white"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
