import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '6rem',
        color: '#182848',
        marginBottom: '20px'
      }}>404</h1>
      <h2 style={{
        fontSize: '2rem',
        color: '#4b6cb7',
        marginBottom: '20px'
      }}>Page Not Found</h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '30px'
      }}>The page you are looking for doesn't exist or has been moved.</p>
      <NavLink 
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#182848',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#4b6cb7'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#182848'}
      >
        Return Home
      </NavLink>
    </div>
  );
};

export default NotFound;
