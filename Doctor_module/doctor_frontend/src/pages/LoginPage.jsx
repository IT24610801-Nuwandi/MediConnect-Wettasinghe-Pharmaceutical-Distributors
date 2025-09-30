import React from "react";
import DoctorLogin from "../components/DoctorLogin";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Doctor Login Form */}
      <DoctorLogin />
    </div>
  );
};

export default LoginPage;
