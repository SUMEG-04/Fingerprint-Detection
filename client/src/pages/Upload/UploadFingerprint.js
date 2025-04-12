import React, { useState } from 'react';
import './UploadFingerprint.css';
import FingerprintUpload from '../../components/FingerprintUpload/FingerprintUpload';

const UploadFingerprint = () => {


  return (
    <div className="upload-container">
      <div className="upload-box">
        <FingerprintUpload/>
      </div>
    </div>
  );
};

export default UploadFingerprint;
