import React from 'react';
import styles from './styles.scss'; 

const TestimonialCard = ({ image, name, role, company, testimonial }) => {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-text">{testimonial}</blockquote>
      <div className="testimonial-profile">
        <img src={image} alt={`${name}`} className="profile-image" />
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-role">{role} {company && `| ${company}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;