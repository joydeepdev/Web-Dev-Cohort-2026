import { useState } from 'react';
import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return <div>{name}</div>;
};
export default App;
