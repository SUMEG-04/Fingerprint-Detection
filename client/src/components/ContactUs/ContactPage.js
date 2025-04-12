import React from 'react'
import './ContactPage.css';

const ContactPage = () => {
  return (
    <> 
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>Get in touch with us. We'd love to hear from you.</p>
        </div>

        <div className="contact-container">
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Business Street, Suite 100<br />City, State 12345</p>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+91 8368306289</p>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>sumeg04112001@gmail.com</p>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
