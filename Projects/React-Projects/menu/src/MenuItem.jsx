const MenuItem = ({ title, price, img, desc }) => {
  return (
    <article className="w-full bg-white rounded max-w-100 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="h-60 rounded-t w-full object-cover"
      />
      <div className="p-6">
        <header className="flex justify-between flex-wrap gap-4 mb-5">
          <h5 className="font-bold capitalize">{title}</h5>
          <span className="bg-amber-500 text-white py-1 px-2 tracking-wide rounded">
            ${price}
          </span>
        </header>
        <p className="text-gray-500 leading-8">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
