const Title = ({ text }) => {
  return (
    <div>
      <h2>{text || 'Default title'}</h2>
      <div></div>
    </div>
  );
};
export default Title;
