import React, { useState } from "react";

const DoctorRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    licenseNo: "",
    licenseFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend API (POST /doctor/register)
    console.log("Doctor Registration Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-md rounded bg-white w-96 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Doctor Registration</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="text" name="licenseNo" placeholder="License Number" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="file" name="licenseFile" accept=".pdf,.jpg,.png" onChange={handleChange} className="mb-2"/>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Register</button>
    </form>
  );
};

export default DoctorRegisterForm;
