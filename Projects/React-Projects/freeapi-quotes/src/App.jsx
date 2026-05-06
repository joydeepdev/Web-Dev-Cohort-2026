import { useState, useEffect } from 'react';

import './App.css';

function App() {
  return <Quotes />;
}

function Quotes() {
  const [quote, setQuote] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getQuotes() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=1`,
        );

        const data = await res.json();

        setQuote(data.data.data[0]);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    getQuotes();
  }, [page]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">Quotes</h1>
        {loading && <p>Loading quote...</p>}
        {!loading && (
          <div>
            <p>{quote.content}</p>
            <h2>{quote.author}</h2>
          </div>
        )}
        <button onClick={() => setPage((c) => c + 1)}>Next Quote</button>
      </div>
    </div>
  );
}

export default App;
