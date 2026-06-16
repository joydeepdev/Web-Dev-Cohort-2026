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
    <section className="w-[80vw] max-w-160 mx-auto my-40">
      <h1 className="text-center uppercase text-2xl text-gray-700 font-semibold">
        Tired of boring lorem ipsum?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-16 tracking-normal flex justify-center items-center gap-2  "
      >
        <label htmlFor="paragraph" className="text-xl">
          Paragraphs:{' '}
        </label>
        <input
          type="number"
          name="paragraph"
          id="paragraph"
          min="1"
          max="9"
          step="1"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="py-1 px-2 w-16 rounded-sm bg-gray-300 text-lg"
        />

        <button
          type="submit"
          className="self-stretch bg-emerald-500 py-1 px-2 rounded-sm text-white cursor-pointer hover:bg-emerald-700 transition-all duration-500 text-sm"
        >
          Generate
        </button>
      </form>
      <article>
        {data.map((para) => {
          return (
            <p className="mb-8 text-gray-900 leading-8" key={nanoid()}>
              {para}
            </p>
          );
        })}
      </article>
    </section>
  );
};
export default App;
