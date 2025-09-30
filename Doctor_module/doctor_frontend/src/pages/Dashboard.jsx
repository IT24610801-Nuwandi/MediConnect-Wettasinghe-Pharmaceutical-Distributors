import React from "react";
import ProductList from "../components/ProductList";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-black mb-6">Doctor Dashboard</h2>

      {/* Show wholesale product list */}
      <ProductList />
    </div>
  );
};

export default Dashboard;
