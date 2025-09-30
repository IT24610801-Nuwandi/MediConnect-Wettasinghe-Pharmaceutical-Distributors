import React from "react";
import OrderTracking from "../components/OrderTracking";

const OrdersPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-black mb-6">My Orders</h2>

      {/* Show all doctor’s orders */}
      <OrderTracking />
    </div>
  );
};

export default OrdersPage;
