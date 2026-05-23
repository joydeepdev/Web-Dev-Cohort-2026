import { useEffect, useState, useCallback } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);
  return <>Hello world</>;
}

export default App;
