import React, { useState, useEffect } from "react";

const OrderTracking = () => {
  const [orders, setOrders] = useState([]); // Store doctor orders

  useEffect(() => {
    // TODO: Fetch orders from API (GET /doctor/orders)
    setOrders([
      { id: 1, status: "Pending" },
      { id: 2, status: "Processing" },
    ]);
  }, []);

  return (
    <div className="p-4 bg-white shadow-md w-96 mx-auto mt-10 rounded">
      <h2 className="text-xl font-bold mb-4">Track Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="border p-2 mb-2 rounded">
            Order #{order.id} → <span className="font-semibold">{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTracking;
