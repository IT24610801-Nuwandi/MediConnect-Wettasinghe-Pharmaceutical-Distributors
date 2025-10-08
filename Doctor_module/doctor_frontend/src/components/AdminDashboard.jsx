import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminPage.css';

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingDoctors = async () => {
      try {
        const response = await axios.get('/api/doctors?status=pending');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingDoctors();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.patch(`/api/doctors/${id}`, { status: 'approved' });
      setDoctors((prev) => prev.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error('Error approving doctor:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.patch(`/api/doctors/${id}`, { status: 'rejected' });
      setDoctors((prev) => prev.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error('Error rejecting doctor:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Pending Doctor Verifications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : doctors.length === 0 ? (
        <p>No pending registrations.</p>
      ) : (
        doctors.map((doc) => (
          <div key={doc._id} className="doctor-card">
            <p><strong>Name:</strong> {doc.fullName}</p>
            <p><strong>Email:</strong> {doc.email}</p>
            <p><strong>License:</strong> {doc.licenseNumber}</p>
            <div className="action-buttons">
              <button onClick={() => handleApprove(doc._id)}>✅ Approve</button>
              <button onClick={() => handleReject(doc._id)}>❌ Reject</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
