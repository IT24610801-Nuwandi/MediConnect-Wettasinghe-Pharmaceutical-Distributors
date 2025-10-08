import React, { useState } from 'react';
import '../styles/LoginPage.css';

const DoctorLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Logging in with:', formData);
      // TODO: Send to backend
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Doctor Login</h2>

        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>

        <p className="register-redirect">
          Don't have an account? <a href="/register">Register Here</a>
        </p>
      </form>
    </div>
  );
};

export default DoctorLogin;
