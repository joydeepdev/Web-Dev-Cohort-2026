import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return <Jokes />;
}

function Jokes() {
  const [joke, setJoke] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getJokes() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/randomjokes?page=${page}&limit=1`,
        );

        const data = await res.json();

        setJoke(data.data.data[0]);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    getJokes();
  }, [page]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">😂 Random Joke Generator</h1>

        {loading ? (
          <p className="loading">Loading joke...</p>
        ) : (
          <>
            <p className="joke">{joke.content || 'No joke found'}</p>

            <div className="buttons">
              <button
                className="prev-btn"
                onClick={() => {
                  setPage((c) => Math.max(c - 1, 1));
                }}
              >
                ⬅ Previous
              </button>

              <button
                className="next-btn"
                onClick={() => {
                  setPage((c) => c + 1);
                }}
              >
                Next ➡
              </button>
            </div>

            <p className="page">Joke #{page}</p>
          </>
        )}
      </div>
    </div>
  );
}
export default App;
