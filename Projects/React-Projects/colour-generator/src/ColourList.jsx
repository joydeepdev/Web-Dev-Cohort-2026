import SingleColour from './SingleColour';
import { nanoid } from 'nanoid';

const ColourList = ({ colours }) => {
  return (
    <section>
      {colours.map((colour, index) => {
        return <SingleColour key={nanoid()} colour={colour} index={index} />;
      })}
    </section>
  );
};
export default ColourList;
