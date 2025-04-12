import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const getAuthHeader = () => {
  const user = authService.getCurrentUser();
  if (user && user.token) {
    return {  Authorization: `Bearer ${user.token}`,};
  }
  return {};
};

const getToken=()=>{
  const user = authService.getCurrentUser();
  if (user && user.token) {
    return user.token;
  }
}

const uploadFingerprint = async (fingerprintData) => {
  try {
    const response = await axios.post(`${API_URL}/fingerprint/verify`, fingerprintData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const getFingerprint = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/fingerprint/${id}`, {
      headers: getAuthHeader()
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const deleteFingerprint = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/fingerprint/${id}`, {
      headers: getAuthHeader()
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const updateFingerprint = async (id, fingerprintData) => {
  try {
    const response = await axios.put(`${API_URL}/fingerprint/${id}`, fingerprintData, {
      headers: getAuthHeader()
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const fingerprintService = {
  uploadFingerprint,
  getFingerprint,
  deleteFingerprint,
  updateFingerprint
};

export default fingerprintService;
