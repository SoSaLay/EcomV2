import React from 'react';
import styles from './styles.scss'; 
import NavBar from '../navigation/navbar'; 


const Footer = () => {
    return (

      <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/products" className="footer-link">Products</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
          <img src="/facebook-svgrepo-com.svg" alt="Facebook Logo" className="social-icon" />
          <img src="/instagram-svgrepo-com (1).svg" alt="Instagram Logo" className="social-icon" />
          <img src="/linkedin-svgrepo-com (2).svg" alt="LinkedIn Logo" className="social-icon" />
          <img src="/youtube-svgrepo-com.svg" alt="YouTube Logo" className="social-icon" />
        </div>
        <p className="footer-text">© 2024 MarketInfoZ: Privacy Policy</p>
      </div>
    </footer>

    );
};

export default Footer;
