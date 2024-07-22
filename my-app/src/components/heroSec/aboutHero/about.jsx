
import React from 'react';
import styles from './styles.scss'; 

const AboutHero = () => {
    return (
      <div className="about-hero">
        <div className="about-hero-content">
          <h2>Welcome to MarketInfoZ!</h2>
          <p>
            Your premier platform for scientific intelligence! 
            We deliver high-quality business and market research services to 
            help clients make informed decisions confidently. From design to delivery,
            providing insights into your markets, customers, and competition.  
            We are committed to delivering impactful research services that cater to your 
            specific needs and transform your efforts into income impact
            in numerous markets.
          </p>
          <div className="about-hero-image">
            <img src="libary.jpeg" alt="Library" />
          </div>
        </div>
        <div className="about-hero-icons">
          <div className="icon">
            <img src="illumination-svgrepo-com.svg" alt="Illumination" />
            <h3>Purpose</h3>
            <p>MarketInfoZ empowers businesses and investors with high-quality research and insights for informed decision-making.</p>
          </div>
          <div className="icon">
            <img src="alarm-clock-svgrepo-com.svg" alt="Alarm Clock" />
            <h3>Development</h3>
            <p>Achieving profitable growth requires consistent effort and strategic learning. Our goal is to facilitate your progress and success.</p>
          </div>
          <div className="icon">
            <img src="short-message-svgrepo-com.svg" alt="Short Message" />
            <h3>Our Role</h3>
            <p>We are dedicated to providing impactful research, building trust, and helping you turn insights into actionable results.</p>
          </div>
          <div className="icon special-icon">
            <img src="upgrade-svgrepo-com.svg" alt="Rocket Ship" />
            <h3>Services</h3>
            <p>We offer personalized research services and ongoing support to meet your unique needs.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutHero;