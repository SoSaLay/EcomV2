import React from 'react';
import styles from './styles.scss'; 
import NavBar from '../navigation/navbar'; 


const Footer = () => {
    return (

      <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/meetUs" className="footer-link">Solutions</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="/facebook-svgrepo-com.svg" alt="Facebook Logo" className="social-icon" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src="/instagram-svgrepo-com (1).svg" alt="Instagram Logo" className="social-icon" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin-svgrepo-com (2).svg" alt="LinkedIn Logo" className="social-icon" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img src="/youtube-svgrepo-com.svg" alt="YouTube Logo" className="social-icon" />
  </a>
</div>
        <p className="footer-text">© 2024 MarketInfoZ: Privacy Policy</p>
      </div>
    </footer>

    );
};

export default Footer;

