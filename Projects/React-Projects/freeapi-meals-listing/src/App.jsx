import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Meals />
    </div>
  );
}

function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMeals() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=12`,
        );

        const data = await res.json();
        const mealData = data?.data?.data || [];

        setMeals(mealData);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    getMeals();
  }, [page]);

  return (
    <div className="meals-container">
      <h1 className="title">🍽 Meal Explorer</h1>

      <NavBar page={page} setPage={setPage} />

      {loading && <p className="loading">Loading meals...</p>}

      {!loading && (
        <div className="meals-grid">
          {meals.map((meal) => (
            <div className="meal-card" key={meal.idMeal}>
              <div className="image-wrapper">
                <img
                  className="meal-image"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </div>

              <div className="meal-content">
                <div className="meal-tags">
                  <span className="tag">{meal.strCategory}</span>
                  <span className="tag">{meal.strArea}</span>
                </div>

                <h2 className="meal-title">{meal.strMeal}</h2>

                <a
                  className="watch-btn"
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NavBar({ page, setPage }) {
  return (
    <div className="navbar">
      <button
        className="nav-btn"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
      >
        ← Previous
      </button>

      <span className="page-text">Page {page}</span>

      <button className="nav-btn" onClick={() => setPage((p) => p + 1)}>
        Next →
      </button>
    </div>
  );
}

export default App;
