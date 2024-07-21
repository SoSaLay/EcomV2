import React from 'react';
import styles from './styles.scss'; 
import Button from '../../button/button';

const Hero = ({ backgroundImage, heading, subheading, ctaText, ctaOnClick }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className="hero-heading">{heading}</h1>
        <h2 className="hero-subheading">{subheading}</h2>
        <Button onClick={ctaOnClick} className="hero-cta">{ctaText}</Button>
      </div>
    </div>
  );
};

export default Hero;
