import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import '../styles/AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Verification Portal</h1>
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
