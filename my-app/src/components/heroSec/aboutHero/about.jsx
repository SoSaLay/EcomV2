
import React from 'react';
import styles from './styles.scss'; 

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero-content">
        <h2>About us</h2>
        <p>
          <strong>we.book’s mission</strong> is to bring people and service businesses together by enabling them to easily reserve their services online no matter which, where they are or when they want to book!
        </p>
        <p>
          <strong>Our vision</strong> is to become the best global customer centric One Stop Solution where small service businesses and their clients unite in harmony.
        </p>
        <p>
          Today we.book runs four offices around the world with the <strong>headquarters based in Hyderabad.</strong>
        </p>
      </div>
      <div className="about-hero-image">
        <img src="path/to/placeholder.svg" alt="Placeholder Image" />
      </div>
      <div className="about-hero-icons">
        <div className="icon">
          <img src="path/to/share-location-placeholder.svg" alt="Share Location" />
          <p>Share location</p>
        </div>
        <div className="icon">
          <img src="path/to/verified-services-placeholder.svg" alt="Verified Services" />
          <p>Verified Services</p>
        </div>
        <div className="icon">
          <img src="path/to/easy-payment-placeholder.svg" alt="Easy Payment" />
          <p>Easy payment</p>
        </div>
        <div className="icon">
          <img src="path/to/reach-clients-placeholder.svg" alt="Reach More Clients" />
          <p>Reach more clients online</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
