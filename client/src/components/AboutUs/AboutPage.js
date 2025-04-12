import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page" id="about">
            <div className="about-hero">
                <h1>About BioPay</h1>
                <p>Revolutionizing payments through secure biometric authentication</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>At BioPay, we're on a mission to make payments more secure and convenient through cutting-edge biometric technology. We believe that your fingerprint is the key to safer transactions.</p>
                </div>

                <div className="about-section">
                    <h2>What Sets Us Apart</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <h3>Advanced Security</h3>
                            <p>State-of-the-art fingerprint recognition and encryption</p>
                        </div>
                        <div className="feature">
                            <h3>Easy Integration</h3>
                            <p>Simple implementation for businesses of all sizes</p>
                        </div>
                        <div className="feature">
                            <h3>Fast Processing</h3>
                            <p>Lightning-quick transaction processing</p>
                        </div>
                    </div>
                </div>

                <div className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/200" alt="Sumeg Sharnagat" />
                        <h3>Sumeg Sharnagat</h3>
                        <p>Lead Developer & Founder</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="contact-info">
                            <a href="mailto:sumeg04112001@gmail.com">
                                <i className="fas fa-envelope"></i> sumeg04112001@gmail.com
                            </a>
                            <a href="tel:+918368306289">
                                <i className="fas fa-phone"></i> +91 8368306289
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
