import { useState } from 'react';

const Form = ({ addColour }) => {
  const [colour, setColour] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColour(colour);
  };
  return (
    <section className="my-10 px-4 lg:flex lg:items-center lg:gap-3 lg:mx-40">
      <h4 className="text-2xl mb-3 lg:mb-0">Colour Generator</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-3"
      >
        <input
          type="color"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          className="h-11 w-11"
        />

        <input
          type="text"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          placeholder="#f15025"
          className="p-2 border rounded"
        />

        <button
          type="submit"
          style={{ backgroundColor: colour }}
          className="px-4 py-2 rounded text-white bg-orange-500 cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
