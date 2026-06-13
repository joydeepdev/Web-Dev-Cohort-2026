import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id}>
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
