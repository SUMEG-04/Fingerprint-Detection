const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

/**
 * Sends fingerprint image to Python Flask API for matching.
 * @param {string} uploadedImagePath - Path to uploaded fingerprint image.
 * @returns {Promise<Object>} - Result from Python API.
 */
const matchFingerprint = async (uploadedImagePath) => {
  try {
    // Ensure file exists
    if (!fs.existsSync(uploadedImagePath)) {
      throw new Error('Uploaded fingerprint image does not exist.');
    }

    // Create form data with fingerprint image
    const formData = new FormData();
    formData.append('fingerprint', fs.createReadStream(uploadedImagePath));

    // Send request to Python Flask API
    const response = await axios.post('http://localhost:5000/match-fingerprint', formData, {
      headers: {
        ...formData.getHeaders()
      }
    });

    return response.data;

  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.data.error}`);
    }
    throw error;
  }
};

module.exports = {
  matchFingerprint
};
