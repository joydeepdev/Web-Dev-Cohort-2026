import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(text.slice(0, count));
  };
  return (
    <section>
      <h1>Tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="paragraph">Paragraphs: </label>
          <input
            type="number"
            name="paragraph"
            id="paragraph"
            min="1"
            max="9"
            step="1"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </div>
        <button type="submit">Generate</button>
      </form>
      <div>
        {data.map((para) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
