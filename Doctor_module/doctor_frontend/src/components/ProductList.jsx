import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store products

  useEffect(() => {
    // TODO: Fetch wholesale product list from backend (GET /doctor/products)
    setProducts([
      { id: 1, name: "Medicine A", wholesalePrice: 100 },
      { id: 2, name: "Medicine B", wholesalePrice: 150 },
    ]);
  }, []); // Empty dependency array → runs once on component mount

  return (
    <div className="p-4 bg-white shadow-md mx-auto mt-10 rounded w-[600px]">
      <h2 className="text-xl font-bold mb-4">Wholesale Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="border p-2 mb-2 rounded flex justify-between">
            {/* Product Name */}
            <span>{p.name}</span>

            {/* Wholesale Price */}
            <span className="text-green-600 font-semibold">Rs. {p.wholesalePrice}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
