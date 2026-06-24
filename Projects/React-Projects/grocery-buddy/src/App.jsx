import { useState } from 'react';
import Form from './Form';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <section className="w-[90vw] mx-auto max-w-lg mt-32 p-8 rounded shadow hover:shadow-xl transition-all duration-300 ease-in-out ">
      <Form addItem={addItem} />
    </section>
  );
};
export default App;
