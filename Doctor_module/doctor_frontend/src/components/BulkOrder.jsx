import React, { useState } from "react";

const BulkOrder = () => {
  // State to store bulk order details
  const [order, setOrder] = useState({ productId: "", quantity: 0 });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bulk Order:", order);
    // TODO: API call to backend (POST /doctor/order/bulk)
  };

  return (
    <div className="p-4 bg-white shadow-md w-96 mx-auto mt-10 rounded">
      <h2 className="text-xl font-bold mb-4">Place Bulk Order</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product ID" 
          value={order.productId} 
          onChange={(e) => setOrder({ ...order, productId: e.target.value })} 
          className="border p-2 w-full mb-2"
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={order.quantity} 
          onChange={(e) => setOrder({ ...order, quantity: e.target.value })} 
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">Place Order</button>
      </form>
    </div>
  );
};

export default BulkOrder;
