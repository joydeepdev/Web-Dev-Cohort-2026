import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Cat />
    </div>
  );
}

function Cat() {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchCat() {
    try {
      setLoading(true);

      const res = await fetch(
        'https://api.freeapi.app/api/v1/public/cats/cat/random',
      );

      const data = await res.json();

      setCatData(data.data);
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="cat-card">
      {loading && <p className="loading">Loading data....</p>}
      {!loading && catData && (
        <>
          <div className="cat-image-container">
            <img className="cat-image" src={catData.image} alt={catData.name} />
          </div>

          <div className="cat-content">
            <h1 className="cat-name">{catData.name}</h1>
            <h2 className="cat-origin">
              Origin: <span>{catData.origin}</span>
            </h2>
            <p className="cat-description">{catData.description}</p>
            <button className="next-btn" onClick={fetchCat}>
              {' '}
              Next Cat
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
