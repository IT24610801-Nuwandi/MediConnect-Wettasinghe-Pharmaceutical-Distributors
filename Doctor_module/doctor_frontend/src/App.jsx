import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Page imports
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import OrdersPage from "./pages/OrdersPage";

// Component imports
import BulkOrder from "./components/BulkOrder";
import PrescriptionUpload from "./components/PrescriptionUpload";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div id="root">
        {/* Sidebar */}
        <aside className="sidebar">
          <h1 className="portal-title">Doctor Portal</h1>
          <nav>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/bulk-order">Bulk Order</a>
            <a href="/upload">Upload Prescription</a>
            <a href="/orders">Orders</a>
            <a href="/profile">Profile</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bulk-order" element={<BulkOrder />} />
            <Route path="/upload" element={<PrescriptionUpload />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
