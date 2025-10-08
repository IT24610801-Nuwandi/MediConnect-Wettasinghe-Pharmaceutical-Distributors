import React, { useState, useEffect } from "react";

const Profile = () => {
  const [doctor, setDoctor] = useState({ name: "", email: "", licenseNo: "" });

  useEffect(() => {
    // TODO: Fetch doctor profile from backend API
  }, []);

  return (
    <div className="p-4 bg-white shadow-md w-96 mx-auto mt-10 rounded">
      <h2 className="text-xl font-bold mb-4">Doctor Profile</h2>
      <p><strong>Name:</strong> {doctor.name}</p>
      <p><strong>Email:</strong> {doctor.email}</p>
      <p><strong>License No:</strong> {doctor.licenseNo}</p>
    </div>
  );
};

export default Profile;