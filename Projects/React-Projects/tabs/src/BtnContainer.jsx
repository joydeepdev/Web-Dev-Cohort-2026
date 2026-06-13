const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="flex justify-center gap-4 mb-10 lg:flex-col lg:justify-start">
      {jobs.map((item, index) => (
        <button
          key={item.id}
          className={`border-b-2 pb-2 cursor-pointer hover:text-green-500 hover:border-green-500 transition-all duration-500 ease-in-out lg:border-b-0 lg:border-l-2 ${
            index === currentItem
              ? 'border-green-500 text-green-500'
              : 'border-transparent'
          }`}
          onClick={() => setCurrentItem(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};
export default BtnContainer;
