import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="mx-auto mt-10 flex justify-center">
        <div className="h-15 w-15 border-4 rounded-full border-gray-300 border-t-green-500 animate-spin "></div>
      </section>
    );
  }

  return (
    <div className="bg-gray-50">
      <section className="mx-auto w-[80vw] max-w-5xl mt-20 lg:grid lg:grid-cols-[250px_1fr] gap-3 ">
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo jobs={jobs} currentItem={currentItem} />
      </section>
    </div>
  );
};
export default App;
