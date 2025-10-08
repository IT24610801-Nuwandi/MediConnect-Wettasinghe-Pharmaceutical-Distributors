// src/api/authApi.js

import axios from 'axios';

const API_URL = 'http://localhost:8081'; 

// Register a new doctor
export const registerDoctor = async (formData) => {
  try {
    const response = await axios.post('/doctor/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // For file uploads
      },
    });
    return response.data; // Assuming the backend sends a response with registration info
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Login a doctor
import axios from "axios";

const loginDoctor = async (credentials) => {
  try {
    const response = await axios.post("/doctor/login", credentials);  // POST request to the login endpoint
    return response.data;  // Assuming the backend returns a token or user data
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : "Login failed");
  }
};

export { loginDoctor };

// You can add more auth-related functions like logout, refresh tokens, etc.
