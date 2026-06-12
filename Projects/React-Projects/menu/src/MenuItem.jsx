const MenuItem = ({ title, price, img, desc }) => {
  return (
    <article>
      <img src={img} alt={title} className="w-30 mb-3" />
      <div>
        <header>
          <h5>{title}</h5>
          <span>${price}</span>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
