import SingleColour from './SingleColour';

const ColourList = ({ colours }) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {colours.map((colour, index) => {
        return <SingleColour key={colour.hex} colour={colour} index={index} />;
      })}
    </section>
  );
};

export default ColourList;
