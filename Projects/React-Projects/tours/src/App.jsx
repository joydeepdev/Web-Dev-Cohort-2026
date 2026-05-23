import { useEffect, useState, useCallback } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);
  return (
    <>
      {isLoading && (
        <main>
          <Loading />
        </main>
      )}
      {!isLoading && (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      )}
    </>
  );
}

export default App;
