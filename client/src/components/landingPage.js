import { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import gsap from "gsap";
import "./landingPage.css";

const LandingPage = () => {
  const stringRef = useRef(null);
  const stringContainerRef = useRef(null);


  const finalPath = `M 10 100 Q 500 100 990 100`;

  const handleMouseMove = (e) => {
    console.log(e)
    const path = `M 10 100 Q ${e.pageX} ${e.pageY} 990 100`;
    gsap.to("svg path", { attr: { d: path }, duration: 0.2, ease: "Power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.to("svg path", { attr: { d: finalPath }, duration: 2, ease: "elastic.out" });
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to BioPay</h1>
        <p>Secure. Fast. Fingerprint-based payments made easy.</p>
        <div className="hero-buttons">
          <NavLink to="/register" className="btn primary-btn">Get Started</NavLink>
          <NavLink to="/login" className="btn secondary-btn">Login</NavLink>
        </div>

        <div id="string" >
          <svg width="1000" height="200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
          </svg>
        </div>
      </header>


      <section className="features-section">
        <div className="feature-card">
          <h2>🧠 Biometric Authentication</h2>
          <p>Authenticate users using secure fingerprint recognition technology.</p>
        </div>
        <div className="feature-card">
          <h2>🔒 Secure Transactions</h2>
          <p>End-to-end encrypted and reliable payment processing.</p>
        </div>
        <div className="feature-card">
          <h2>⚡ Easy Integration</h2>
          <p>Simple onboarding process and seamless user experience.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} BioPay. All rights reserved.</p>
      </footer>
    </div>
  );

  return (
    <>
      <div className="landing-page" id="home" ref={stringRef}>
        <div className="landing-page-content">
          <h1>Welcome to BioPay</h1>
        </div>
        <p>Secure. Fast. Fingerprint-based payments made easy.</p>
        <div className="hero-buttons">
          <NavLink to="/register" className="btn primary-btn">Get Started</NavLink>
          <NavLink to="/login" className="btn secondary-btn">Login</NavLink>
        </div>
        <div id="string" >
          <svg width="1000" height="200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
