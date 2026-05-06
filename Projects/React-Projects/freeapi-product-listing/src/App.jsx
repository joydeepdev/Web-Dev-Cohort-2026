import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return <Products />;
}

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/randomproducts?page=${page}&limit=10`,
        );
        const data = await res.json();
        setProducts(data.data.data);
        setTotalPages(data.data.totalPages);
      } catch (error) {
        console.log(`Error fetching data`, error);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [page]);


  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`page-number ${page === i ? 'active' : ''}`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {loading ? (
          <p className="loading-text">Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <h2 className="product-title">{product.title}</h2>
              <div className="category-tags">
                <span className="tag">{product.brand}</span>
                <span className="tag">{product.category}</span>
              </div>
              <p className="description">{product.description}</p>
              <div className="stats">
                <span>Stock: {product.stock}</span>
                <span>⭐ {product.rating}</span>
              </div>
              <p className="price-tag">
                ${product.price}{' '}
                <span className="discount">-{product.discountPercentage}%</span>
              </p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))
        )}
      </div>

      <div className="pagination-wrapper">
        <button
          className="nav-btn"
          disabled={page === 1}
          onClick={() => setPage((c) => Math.max(c - 1, 1))}
        >
          &laquo; Prev
        </button>

        <div className="page-numbers">{renderPagination()}</div>

        <button
          className="nav-btn"
          disabled={page === totalPages}
          onClick={() => setPage((c) => c + 1)}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default App;
