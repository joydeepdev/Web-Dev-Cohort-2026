import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };
  return (
    <section className="w-[90vw] mx-auto max-w-lg mt-32 p-8 rounded shadow hover:shadow-xl transition-all duration-300 ease-in-out ">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};
export default App;
