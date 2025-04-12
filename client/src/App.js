import React from 'react';
import './App.css';
import Home from './pages/Home';
import Router from './appRoutes/Router';
import { FingerprintProvider } from './context/FingerprintContext';
import { AuthProvider } from './context/AuthContext';

const App= ()=>{
  return (
    <div className="app">
      <AuthProvider>
        <FingerprintProvider>
          <Router/>
        </FingerprintProvider>
      </AuthProvider>
    </div>
  );
}

export default App;