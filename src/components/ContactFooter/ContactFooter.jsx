import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './ContactFooter.css';

function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action script for handling submission (e.g., Formspree, Netlify forms, or backend API)
    console.log("Form Submitted Safely:", formData);
    alert("Thanks for reaching out! I will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' }); // Reset form metrics
  };

  return (
    <footer className="contact-footer" id="contacts">
      <div className="footer-container">
        
        {/* Left Side: Direct Contact Details & Brand Pitch */}
        <div className="footer-info-side">
          <span className="footer-subtitle">Get In Touch</span>
          <h2 className="footer-title">Let's Connect</h2>
          <div className="title-divider"></div>
          
          <p className="footer-pitch">
            Whether you are a local client looking for custom freelance solutions or a hiring manager 
            seeking a production-focused development intern, my inbox is always open.
          </p>

          <div className="direct-channels">
            <div className="channel-item">
              <FaEnvelope className="channel-icon" />
              <a href="mailto:cheralyndunkel@gmail.com">cheralyndunkel@gmail.com</a>
            </div>
            <div className="channel-item">
              <FaPhoneAlt className="channel-icon" />
              <a href="tel:2314978675">(231) 497-8675</a>
            </div>
          </div>

          <div className="footer-social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub Repositories"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Network"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Side: Clean Form Workspace Container */}
        <div className="footer-form-side">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" id="name" name="name" required 
                value={formData.name} onChange={handleChange} placeholder="Cheralyn" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" id="email" name="email" required 
                value={formData.email} onChange={handleChange} placeholder="name@example.com" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" name="message" rows="5" required 
                value={formData.message} onChange={handleChange} placeholder="Tell me about your project specifications..."
              ></textarea>
            </div>

            <button type="submit" className="submit-form-btn">Send Message</button>
          </form>
        </div>

      </div>

      {/* Copyright Ticker Footer Sub-Bar */}
      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} CD. All rights reserved.</p>
        <p className="signature-tag">Designed & Engineered with React</p>
      </div>
    </footer>
  );
}

export default ContactFooter;
