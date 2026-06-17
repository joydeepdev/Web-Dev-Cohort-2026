import { useState } from 'react';

const Form = () => {
  const [colour, setColour] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h4>Colour Generator</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
        <input
          type="text"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" style={{ backgroundColor: colour }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
