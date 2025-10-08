import React, { useState } from 'react';
import '../styles/RegisterPage.css';

const DoctorRegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    licenseFile: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    if (!formData.licenseFile) newErrors.licenseFile = 'License file is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    if (formData.password && !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters and include a number and special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.licenseFile) {
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(formData.licenseFile.type)) {
        newErrors.licenseFile = 'File must be PDF, JPG, or PNG';
      }
      if (formData.licenseFile.size > 2 * 1024 * 1024) {
        newErrors.licenseFile = 'File size must be under 2MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Submitting:', formData);
      // TODO: Send to backend
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Doctor Sign Up</h2>

        <label htmlFor="fullName" className="input-label">Full Name</label>
        <input type="text" name="fullName" id="fullName" onChange={handleChange} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <label htmlFor="licenseNumber" className="input-label">License Number</label>
        <input type="text" name="licenseNumber" id="licenseNumber" onChange={handleChange} />
        {errors.licenseNumber && <p className="error">{errors.licenseNumber}</p>}

        <label htmlFor="licenseFile" className="file-label">Upload Doctor License</label>
        <input
          type="file"
          name="licenseFile"
          id="licenseFile"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleChange}
        />
        {formData.licenseFile && (
          <p className="file-name">Selected: {formData.licenseFile.name}</p>
        )}
        {errors.licenseFile && <p className="error">{errors.licenseFile}</p>}

        <button type="submit">Sign Up</button>

        <p className="login-redirect">
          Have an account? <a href="/login">Login Here</a>
        </p>
      </form>
    </div>
  );
};

export default DoctorRegisterForm;
