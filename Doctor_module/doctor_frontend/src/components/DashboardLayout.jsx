import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#2c3e50",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Doctor Panel</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <NavLink to="/doctor/dashboard" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/register" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/login" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/products" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Browse Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/bulk-order" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Place Bulk Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/upload" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Upload Prescription
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/orders" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                Track Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor/profile" style={({ isActive }) => ({
                color: isActive ? "#1abc9c" : "#fff",
                textDecoration: "none",
                display: "block",
                padding: "8px 0",
              })}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* Nested routes load here */}
      </main>
    </div>
  );
};

export default DashboardLayout;