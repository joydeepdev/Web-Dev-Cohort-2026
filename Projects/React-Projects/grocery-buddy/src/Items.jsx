import SingleItem from './SingleItem';

const Items = ({ items }) => {
  return (
    <div className='mt-8 grid gap-y-1'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
