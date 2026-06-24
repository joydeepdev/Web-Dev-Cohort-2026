import { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-2xl text-center mb-5">Grocery Buddy</h4>
      <div className="grid grid-cols-[1fr_100px]">
        <input
          type="text"
          className="px-3 py-1 rounded border-gray-200 border-3"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="cursor-pointer border-transparent rounded bg-sky-500">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
