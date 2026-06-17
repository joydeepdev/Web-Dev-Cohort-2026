import { useState } from 'react';
import ColourList from './ColourList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colours, setColours] = useState(new Values('#f15025').all(10));

  const addColour = (colour) => {
    try {
      const newColours = new Values(colour).all(10);
      setColours(newColours);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <Form addColour={addColour} />

      <div className="max-w-7xl mx-auto px-4">
        <ColourList colours={colours} />
      </div>

      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
