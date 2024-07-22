import React from 'react';
import styles from './styles.scss'; 

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <div className="button-container">
      <button className="custom-button" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;