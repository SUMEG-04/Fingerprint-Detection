import React, { createContext, useState, useContext } from 'react';
import fingerprintService from '../services/fingerprintService';

const FingerprintContext = createContext();

export const useFingerprint = () => {
  return useContext(FingerprintContext);
};

export const FingerprintProvider = ({ children }) => {
  const [fingerprint, setFingerprint] = useState(null);
  const [uploadUrl, setUploadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Upload fingerprint function
  const uploadFingerprint = async (fingerprintData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fingerprintService.uploadFingerprint(fingerprintData);
      console.log(data);
      setFingerprint(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get fingerprint function
  const getFingerprint = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fingerprintService.getFingerprint(id);
      setFingerprint(data.fingerprint);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete fingerprint function
  const deleteFingerprint = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await fingerprintService.deleteFingerprint(id);
      setFingerprint(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update fingerprint function
  const updateFingerprint = async (id, fingerprintData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fingerprintService.updateFingerprint(id, fingerprintData);
      setFingerprint(data.fingerprint);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    fingerprint,
    loading,
    error,
    uploadUrl,
    setUploadUrl,
    uploadFingerprint,
    getFingerprint,
    deleteFingerprint,
    updateFingerprint
  };

  return (
    <FingerprintContext.Provider value={value}>
      {children}
    </FingerprintContext.Provider>
  );
};

export default FingerprintContext;
