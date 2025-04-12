import React from 'react';
import './navbar.css';

const Navbar = () => {
  return <>
    <div className="navbar">
        <div className="navbar-logo">
            <img src="" alt="logo" />
            BioPay
        </div>
        <div className="navbar-links">
            <a href="home">Home</a>
            <a href="about">About</a>
            {/* <a href="services">Services</a> */}
            <a href="contact">Contact</a>
            <a href="login">Login</a>
        </div>
    </div>
  </>;
};

export default Navbar;