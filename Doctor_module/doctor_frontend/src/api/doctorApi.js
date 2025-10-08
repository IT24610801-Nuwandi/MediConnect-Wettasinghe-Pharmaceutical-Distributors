// src/api/doctorApi.js

import axios from 'axios';

const API_URL = 'http://localhost:8081'; 

// Fetch all orders of a doctor
export const getDoctorOrders = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/doctor/orders/${doctorId}`);
    return response.data; // Return orders data
  } catch (error) {
    throw error.response?.data || 'Error fetching orders.';
  }
};

// Place a bulk order
export const placeBulkOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/doctor/order/bulk`, orderData);
    return response.data; // Return order confirmation
  } catch (error) {
    throw error.response?.data || 'Error placing bulk order.';
  }
};

// Upload prescription
export const uploadPrescription = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/doctor/upload-prescription`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data; // Return success response
  } catch (error) {
    throw error.response?.data || 'Error uploading prescription.';
  }
};

// Get doctor profile details
export const getDoctorProfile = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/doctor/profile/${doctorId}`);
    return response.data; // Return doctor profile data
  } catch (error) {
    throw error.response?.data || 'Error fetching doctor profile.';
  }
};
