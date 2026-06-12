const Title = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl text-center">{text || 'Default title'}</h2>
      <div className="w-28 h-0.5 bg-amber-300 mx-auto mt-1"></div>
    </div>
  );
};
export default Title;
