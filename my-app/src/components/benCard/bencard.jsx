// src/components/BenefitCard/BenefitCard.js
import React from 'react';
import styles from './styles.scss'; 

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="icon-container">
        <img src={icon} alt={`${title} icon`} className="icon" />
      </div>
      <div className="text-container">
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-description">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
