import React, { useState } from "react";

const DoctorLogin = () => {
  // State to store login email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    // TODO: Call backend API (POST /doctor/login)
  };

  return (
    <form onSubmit={handleLogin} className="p-4 shadow-md rounded bg-white w-96 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Doctor Login</h2>

      {/* Email input */}
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border p-2 w-full mb-2"
      />

      {/* Password input */}
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border p-2 w-full mb-2"
      />

      {/* Login button */}
      <button type="submit" className="bg-green-600 text-white p-2 rounded w-full">Login</button>
    </form>
  );
};

export default DoctorLogin;
