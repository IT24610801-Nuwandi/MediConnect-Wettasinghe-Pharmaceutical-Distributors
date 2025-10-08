import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BulkOrder.css';

const BulkOrder = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products?type=wholesale');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  const handleOrder = async () => {
    try {
      await axios.post('/api/orders', {
        productId: selectedProduct._id,
        quantity,
      });
      alert('Order placed successfully!');
      setSelectedProduct(null);
      setQuantity(0);
    } catch (err) {
      console.error('Order failed:', err);
      alert('Failed to place order.');
    }
  };

  return (
    <div className="bulk-order">
      <h2>Wholesale Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product._id}
            className={`product-card ${selectedProduct?._id === product._id ? 'selected' : ''}`}
            onClick={() => setSelectedProduct(product)}
          >
            <h3>{product.name}</h3>
            <p>Base Price: Rs. {product.basePrice}</p>
            <p>Wholesale (50+): Rs. {product.wholesalePrice}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="order-form">
          <h3>Order: {selectedProduct.name}</h3>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <p>Total: Rs. {quantity * selectedProduct.wholesalePrice}</p>
          <button onClick={handleOrder}>Place Bulk Order</button>
        </div>
      )}
    </div>
  );
};

export default BulkOrder;
