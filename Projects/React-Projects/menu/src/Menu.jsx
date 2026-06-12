import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
