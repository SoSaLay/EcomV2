import React from 'react';
import styles from './styles.scss'; 

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;