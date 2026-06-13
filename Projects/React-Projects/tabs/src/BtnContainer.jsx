const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className="mr-2"
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
