import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className="w-[90vw] mx-auto max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
