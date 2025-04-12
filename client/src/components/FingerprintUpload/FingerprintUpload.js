import React, { useState } from 'react';
import './FingerprintUpload.css';
import { useFingerprint } from '../../context/FingerprintContext';

const FingerprintUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { uploadFingerprint, error, loading,fingerprint,uploadUrl,setUploadUrl, } = useFingerprint();

  console.log(selectedFile,previewUrl);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('fingerprint', selectedFile);

    try {
      console.log(formData);
      setUploadUrl(previewUrl);
      await uploadFingerprint(formData);
      if (!error) {
        setSelectedFile(null);
        setPreviewUrl(null);
      }
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="fingerprint-upload">
      <div className="upload-container">
        <h1>Upload Your Fingerprint</h1>
        <p>Please upload a clear image of your fingerprint for registration</p>

        <div className="upload-box">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            id="fingerprint-input"
            className="file-input"
          />
          <label htmlFor="fingerprint-input" className="upload-label">
            {previewUrl ? (
              <img src={previewUrl} alt="Fingerprint preview" className="preview-image" />
            ) : (
              <>
                <i className="fas fa-fingerprint"></i>
                <span>Click to upload fingerprint</span>
              </>
            )}
          </label>
        </div>

        {error && (
          <div className="status-message error">
            {error}
          </div>
        )}

        <button 
          className="upload-button"
          onClick={handleUpload}
          disabled={!selectedFile || loading}
        >
          {loading ? 'Uploading...' : 'Upload Fingerprint'}
        </button>

        {fingerprint ? (
          <div className="match-result">
            <h2>Matched Fingerprint: {fingerprint.match}</h2>
            <p>Match Score: {fingerprint.score.toFixed(2)}%</p>
            {/* <p>Status: {fingerprint.matched ? '✅ Matched' : '❌ Not Matched'}</p> */}

            <div className="image-results">
              <div className="image-box">
                <div>
                  <h3>Matched Fingerprint</h3>
                  <img 
                    src={`data:image/jpeg;base64,${fingerprint.matched_image}`} 
                    alt="Matched fingerprint" 
                    className="result-image" 
                  />
                </div>
                <div>
                  <h3>Original Fingerprint</h3>
                  <img src={uploadUrl} alt="Fingerprint preview"  className="result-image" />
                </div>
              </div>

              <div className="image-box">
                <div>
                  <h3>Matching Visualization</h3>
                  <img 
                    src={`data:image/jpeg;base64,${fingerprint.result}`} 
                    alt="Matching result" 
                    className="result-image" 
                  />
                </div>
              </div>
            </div>
          </div>

        ):(
          <></>
        )}

        <div className="upload-guidelines">
          <h3>Guidelines for uploading:</h3>
          <ul>
            <li>Use a clear, high-resolution image</li>
            <li>Ensure the fingerprint is centered in the image</li>
            <li>Avoid blurry or smudged images</li>
            <li>Supported formats: JPG, PNG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FingerprintUpload;
