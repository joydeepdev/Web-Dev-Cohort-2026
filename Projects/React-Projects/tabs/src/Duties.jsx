import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="flex gap-4 items-center mb-5 ">
            <FaAngleDoubleRight className="text-green-500 text-lg  shrink-0" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
